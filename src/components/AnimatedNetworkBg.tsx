import { useEffect, useRef } from 'react';

interface TableNode {
  x: number;
  y: number;
  vx: number;
  vy: number;
  label: string;
  cols: string[];
  width: number;
  height: number;
}

interface Particle {
  x: number;
  y: number;
  fromNode: number;
  toNode: number;
  progress: number;
  speed: number;
}

const TABLE_NAMES = ['users', 'accounts', 'orders', 'products', 'transactions', 'customers', 'invoices', 'payments'];
const COL_SETS = [
  ['id', 'name', 'email'],
  ['id', 'balance', 'status'],
  ['id', 'amount', 'date'],
  ['id', 'sku', 'price'],
  ['id', 'type', 'ref_id'],
];
const SQL_WORDS = [
  'SELECT', 'FROM', 'WHERE', 'JOIN', 'ON', 'GROUP BY', 'ORDER BY',
  'INSERT INTO', 'UPDATE', 'DELETE', 'CREATE TABLE', 'INDEX', 'PRIMARY KEY',
  'FOREIGN KEY', 'CONSTRAINT', 'PARTITION BY', 'WITH',
];

export function AnimatedNetworkBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const nodesRef = useRef<TableNode[]>([]);
  const particlesRef = useRef<Particle[]>([]);
  const sqlLabels = useRef<{ text: string; x: number; y: number; opacity: number; vy: number }[]>([]);
  const animRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', onMouseMove);

    const nodes: TableNode[] = TABLE_NAMES.slice(0, 6).map((label, i) => {
      const cols = COL_SETS[i % COL_SETS.length];
      const w = 110;
      const h = 18 + cols.length * 16;
      return {
        x: 100 + Math.random() * (canvas.width - 220),
        y: 80 + Math.random() * (canvas.height - 200),
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        label,
        cols,
        width: w,
        height: h,
      };
    });
    nodesRef.current = nodes;

    for (let i = 0; i < 8; i++) {
      sqlLabels.current.push({
        text: SQL_WORDS[Math.floor(Math.random() * SQL_WORDS.length)],
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        opacity: 0.03 + Math.random() * 0.05,
        vy: -0.15 - Math.random() * 0.1,
      });
    }

    const drawTable = (node: TableNode) => {
      const { x, y, label, cols, width, height } = node;
      const px = x - width / 2;
      const py = y - height / 2;

      ctx.save();
      ctx.strokeStyle = 'rgba(59,130,246,0.5)';
      ctx.lineWidth = 1;
      ctx.fillStyle = 'rgba(10,20,50,0.7)';
      const r = 4;
      ctx.beginPath();
      ctx.moveTo(px + r, py);
      ctx.lineTo(px + width - r, py);
      ctx.arcTo(px + width, py, px + width, py + r, r);
      ctx.lineTo(px + width, py + height - r);
      ctx.arcTo(px + width, py + height, px + width - r, py + height, r);
      ctx.lineTo(px + r, py + height);
      ctx.arcTo(px, py + height, px, py + height - r, r);
      ctx.lineTo(px, py + r);
      ctx.arcTo(px, py, px + r, py, r);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = 'rgba(37,99,235,0.6)';
      ctx.beginPath();
      ctx.moveTo(px + r, py);
      ctx.lineTo(px + width - r, py);
      ctx.arcTo(px + width, py, px + width, py + r, r);
      ctx.lineTo(px + width, py + 16);
      ctx.lineTo(px, py + 16);
      ctx.lineTo(px, py + r);
      ctx.arcTo(px, py, px + r, py, r);
      ctx.closePath();
      ctx.fill();

      ctx.font = 'bold 9px monospace';
      ctx.fillStyle = 'rgba(255,255,255,0.9)';
      ctx.textAlign = 'center';
      ctx.fillText(label.toUpperCase(), x, py + 11);

      cols.forEach((col, i) => {
        ctx.font = '8px monospace';
        ctx.fillStyle = 'rgba(148,163,184,0.7)';
        ctx.textAlign = 'left';
        ctx.fillText(col, px + 8, py + 24 + i * 14);
      });

      ctx.restore();
    };

    const drawLine = (n1: TableNode, n2: TableNode, alpha: number) => {
      ctx.strokeStyle = `rgba(59,130,246,${alpha})`;
      ctx.lineWidth = 0.8;
      ctx.setLineDash([4, 6]);
      ctx.beginPath();
      ctx.moveTo(n1.x, n1.y);
      ctx.lineTo(n2.x, n2.y);
      ctx.stroke();
      ctx.setLineDash([]);
    };

    let frame = 0;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = 'rgba(5,10,30,0.98)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // grid
      ctx.strokeStyle = 'rgba(30,58,138,0.12)';
      ctx.lineWidth = 0.5;
      const gridSize = 48;
      for (let gx = 0; gx < canvas.width; gx += gridSize) {
        ctx.beginPath();
        ctx.moveTo(gx, 0);
        ctx.lineTo(gx, canvas.height);
        ctx.stroke();
      }
      for (let gy = 0; gy < canvas.height; gy += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, gy);
        ctx.lineTo(canvas.width, gy);
        ctx.stroke();
      }

      // SQL floating words
      sqlLabels.current.forEach((lbl) => {
        lbl.y += lbl.vy;
        if (lbl.y < -20) {
          lbl.y = canvas.height + 20;
          lbl.x = Math.random() * canvas.width;
          lbl.text = SQL_WORDS[Math.floor(Math.random() * SQL_WORDS.length)];
        }
        ctx.font = 'bold 11px monospace';
        ctx.fillStyle = `rgba(96,165,250,${lbl.opacity})`;
        ctx.textAlign = 'left';
        ctx.fillText(lbl.text, lbl.x, lbl.y);
      });

      const nodes = nodesRef.current;
      const mouse = mouseRef.current;

      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;

        const hw = node.width / 2;
        const hh = node.height / 2;
        if (node.x - hw < 0 || node.x + hw > canvas.width) node.vx *= -1;
        if (node.y - hh < 0 || node.y + hh > canvas.height) node.vy *= -1;
        node.x = Math.max(hw, Math.min(canvas.width - hw, node.x));
        node.y = Math.max(hh, Math.min(canvas.height - hh, node.y));

        const dx = mouse.x - node.x;
        const dy = mouse.y - node.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 180 && dist > 0) {
          node.vx += (dx / dist) * 0.04;
          node.vy += (dy / dist) * 0.04;
        }

        const maxSpeed = 0.6;
        const speed = Math.sqrt(node.vx * node.vx + node.vy * node.vy);
        if (speed > maxSpeed) {
          node.vx = (node.vx / speed) * maxSpeed;
          node.vy = (node.vy / speed) * maxSpeed;
        }
      });

      nodes.forEach((node, i) => {
        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const dx = other.x - node.x;
          const dy = other.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 280;
          if (dist < maxDist) {
            drawLine(node, other, 0.25 * (1 - dist / maxDist));
          }
        }
      });

      nodes.forEach(drawTable);

      if (frame % 90 === 0 && nodes.length >= 2) {
        const from = Math.floor(Math.random() * nodes.length);
        let to = Math.floor(Math.random() * nodes.length);
        while (to === from) to = Math.floor(Math.random() * nodes.length);
        particlesRef.current.push({ x: nodes[from].x, y: nodes[from].y, fromNode: from, toNode: to, progress: 0, speed: 0.008 + Math.random() * 0.006 });
      }

      particlesRef.current = particlesRef.current.filter((p) => {
        p.progress += p.speed;
        if (p.progress >= 1) return false;
        const from = nodes[p.fromNode];
        const to = nodes[p.toNode];
        p.x = from.x + (to.x - from.x) * p.progress;
        p.y = from.y + (to.y - from.y) * p.progress;
        const alpha = Math.sin(p.progress * Math.PI);
        ctx.fillStyle = `rgba(96,165,250,${alpha * 0.9})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = `rgba(147,197,253,${alpha * 0.4})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 5, 0, Math.PI * 2);
        ctx.fill();
        return true;
      });

      frame++;
      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
}
