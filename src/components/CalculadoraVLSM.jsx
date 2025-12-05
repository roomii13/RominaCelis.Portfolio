import React, { useState, useEffect } from 'react';
import { X, ArrowLeft, Cpu, Zap, Shield, Globe, Calculator, Network } from 'lucide-react';

// Importa directamente el contenido HTML como string
const htmlContent = `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora VLSM - Romina Celis</title>
    <style>
        :root {
            --primary: #0ea5a4;
            --primary-dark: #0d9488;
            --secondary: #3b82f6;
            --danger: #ef4444;
            --success: #10b981;
            --dark: #0f172a;
            --light: #f8fafc;
            --border: #e2e8f0;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
            min-height: 100vh;
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px;
        }

        .container {
            width: 100%;
            max-width: 1000px;
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(10px);
            border-radius: 20px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
            overflow: hidden;
            animation: fadeIn 0.5s ease-out;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .header {
            background: linear-gradient(135deg, rgba(14, 165, 164, 0.2), rgba(59, 130, 246, 0.2));
            padding: 30px;
            text-align: center;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .header h1 {
            font-size: 2.5rem;
            margin-bottom: 10px;
            background: linear-gradient(90deg, #0ea5a4, #3b82f6);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .header p {
            color: #94a3b8;
            font-size: 1.1rem;
        }

        .calculator-body {
            padding: 30px;
        }

        .input-group {
            margin-bottom: 25px;
        }

        label {
            display: block;
            margin-bottom: 8px;
            font-weight: 600;
            color: white;
            font-size: 1rem;
        }

        .help-text {
            color: #94a3b8;
            font-size: 0.9rem;
            margin-left: 5px;
        }

        input, textarea, select {
            width: 100%;
            padding: 14px;
            background: rgba(255, 255, 255, 0.1);
            border: 2px solid rgba(255, 255, 255, 0.2);
            border-radius: 12px;
            font-size: 1rem;
            color: white;
            transition: all 0.3s;
            font-family: inherit;
        }

        input:focus, textarea:focus, select:focus {
            outline: none;
            border-color: var(--primary);
            box-shadow: 0 0 0 3px rgba(14, 165, 164, 0.2);
            background: rgba(255, 255, 255, 0.15);
        }

        textarea {
            min-height: 120px;
            resize: vertical;
        }

        .row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            margin-bottom: 25px;
        }

        @media (max-width: 768px) {
            .row {
                grid-template-columns: 1fr;
            }
        }

        .btn {
            padding: 15px 30px;
            background: linear-gradient(135deg, var(--primary), var(--secondary));
            color: white;
            border: none;
            border-radius: 12px;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
        }

        .btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 25px rgba(14, 165, 164, 0.3);
        }

        .results-container {
            margin-top: 30px;
            background: rgba(255, 255, 255, 0.05);
            border-radius: 12px;
            padding: 25px;
            border: 2px dashed rgba(255, 255, 255, 0.2);
            min-height: 200px;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 10px;
            overflow: hidden;
        }

        th {
            background: rgba(14, 165, 164, 0.2);
            padding: 15px;
            text-align: left;
            font-weight: 600;
            color: white;
            border-bottom: 2px solid rgba(255, 255, 255, 0.2);
        }

        td {
            padding: 12px 15px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            color: #e2e8f0;
        }

        tr:hover {
            background: rgba(255, 255, 255, 0.05);
        }

        .error {
            background: rgba(239, 68, 68, 0.2);
            color: #fecaca;
            padding: 15px;
            border-radius: 10px;
            margin: 15px 0;
            border-left: 4px solid #ef4444;
        }

        .success {
            background: rgba(16, 185, 129, 0.2);
            color: #a7f3d0;
            padding: 15px;
            border-radius: 10px;
            margin: 15px 0;
            border-left: 4px solid #10b981;
        }

        .network-info {
            background: linear-gradient(135deg, rgba(14, 165, 164, 0.2), rgba(59, 130, 246, 0.2));
            padding: 20px;
            border-radius: 12px;
            margin-bottom: 20px;
            border-left: 4px solid var(--secondary);
        }

        .subnet-badge {
            display: inline-block;
            padding: 4px 12px;
            background: linear-gradient(90deg, var(--primary), var(--secondary));
            color: white;
            border-radius: 20px;
            font-size: 0.9rem;
            font-weight: 600;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🔧 Calculadora VLSM</h1>
            <p>Herramienta profesional para cálculos de subnetting y VLSM</p>
        </div>
        
        <div class="calculator-body">
            <div class="input-group">
                <label>Red base (IP/CIDR) <span class="help-text">ej: 192.168.0.0/24</span></label>
                <input type="text" id="baseNet" value="192.168.0.0/24" placeholder="192.168.0.0/24">
            </div>

            <div class="input-group">
                <label>Requisitos de hosts <span class="help-text">separados por comas, ej: 100,30,10,5</span></label>
                <textarea id="hostsList" placeholder="100,30,10,5">100,30,10,5</textarea>
            </div>

            <div class="row">
                <div class="input-group">
                    <label>Opciones de cálculo</label>
                    <select id="order">
                        <option value="desc">Ordenar descendente (recomendado)</option>
                        <option value="asc">Ordenar ascendente</option>
                        <option value="input">Mantener orden de entrada</option>
                    </select>
                </div>
                <div class="input-group">
                    <label style="visibility: hidden;">Botón</label>
                    <button class="btn" id="calcBtn">
                        <span>📊 Calcular VLSM</span>
                    </button>
                </div>
            </div>

            <div class="results-container" id="output">
                <div style="text-align: center; color: #94a3b8; padding: 40px;">
                    <div style="font-size: 48px; margin-bottom: 20px;">📡</div>
                    <h3 style="margin-bottom: 10px; color: white;">Resultados de VLSM</h3>
                    <p>Ingresa los datos y haz clic en "Calcular VLSM" para ver los resultados</p>
                </div>
            </div>
        </div>
    </div>

    <script>
        // Utilidades IP
        function ipToInt(ip) {
            const parts = ip.trim().split('.');
            if (parts.length !== 4) throw new Error('IP inválida');
            return parts.reduce((acc, p) => (acc << 8) + (parseInt(p, 10) & 0xFF), 0) >>> 0;
        }

        function intToIp(int) {
            return [(int >>> 24) & 255, (int >>> 16) & 255, (int >>> 8) & 255, int & 255].join('.');
        }

        function prefixToMask(prefix) {
            const mask = prefix === 0 ? 0 : 0xFFFFFFFF << (32 - prefix);
            return intToIp(mask >>> 0);
        }

        function hostsFromPrefix(prefix) {
            if (prefix >= 31) return prefix === 31 ? 0 : 1;
            return Math.pow(2, 32 - prefix) - 2;
        }

        function prefixForHostCount(hostsNeeded) {
            if (hostsNeeded === 0) return 31;
            if (hostsNeeded === 1) return 32;
            
            const total = hostsNeeded + 2;
            let bits = Math.ceil(Math.log2(total));
            if (bits < 0) bits = 0;
            let prefix = 32 - bits;
            if (prefix < 0) prefix = 0;
            
            // Ajuste para asegurar suficientes hosts
            while (hostsFromPrefix(prefix) < hostsNeeded && prefix > 0) {
                prefix--;
            }
            
            return prefix;
        }

        function calculateVLSM(baseCidr, requirements, order = 'desc') {
            const parts = baseCidr.split('/');
            if (parts.length !== 2) throw new Error('Base debe estar en formato IP/CIDR');
            
            const baseIp = parts[0].trim();
            const basePrefix = parseInt(parts[1], 10);
            const baseInt = ipToInt(baseIp);
            const baseBlock = Math.pow(2, 32 - basePrefix);
            const baseNetwork = (Math.floor(baseInt / baseBlock) * baseBlock) >>> 0;
            const baseBroadcast = (baseNetwork + baseBlock - 1) >>> 0;

            let reqs = requirements.map((r, idx) => ({
                origIndex: idx,
                hosts: Math.max(0, Math.floor(r)),
                label: \`S\${idx + 1}\`
            }));

            if (order === 'desc') {
                reqs.sort((a, b) => b.hosts - a.hosts);
            } else if (order === 'asc') {
                reqs.sort((a, b) => a.hosts - b.hosts);
            }

            let current = baseNetwork;
            const results = [];

            for (let i = 0; i < reqs.length; i++) {
                const r = reqs[i];
                const pref = prefixForHostCount(r.hosts);
                const size = Math.pow(2, 32 - pref);
                
                const alignedNetwork = (Math.floor(current / size) * size) >>> 0;
                let net = alignedNetwork < current ? (alignedNetwork + size) >>> 0 : alignedNetwork;
                const broadcast = (net + size - 1) >>> 0;

                if (broadcast > baseBroadcast) {
                    throw new Error(\`No hay espacio suficiente para la subred que requiere \${r.hosts} hosts.\`);
                }

                const usableFirst = pref <= 30 ? (net + 1) >>> 0 : null;
                const usableLast = pref <= 30 ? (broadcast - 1) >>> 0 : null;

                results.push({
                    label: r.label,
                    requestedHosts: r.hosts,
                    assignedPrefix: pref,
                    network: intToIp(net),
                    mask: prefixToMask(pref),
                    broadcast: intToIp(broadcast),
                    firstUsable: usableFirst ? intToIp(usableFirst) : 'N/A',
                    lastUsable: usableLast ? intToIp(usableLast) : 'N/A',
                    usableHosts: hostsFromPrefix(pref),
                    blockSize: size
                });

                current = (broadcast + 1) >>> 0;
            }

            return {
                baseNetwork: intToIp(baseNetwork),
                basePrefix,
                baseBroadcast: intToIp(baseBroadcast),
                assigned: results
            };
        }

        // Event Listeners
        document.getElementById('calcBtn').addEventListener('click', () => {
            const output = document.getElementById('output');
            output.innerHTML = '';
            
            try {
                const base = document.getElementById('baseNet').value.trim();
                const hostsRaw = document.getElementById('hostsList').value.trim();
                
                if (!base) throw new Error('Ingrese la red base');
                if (!hostsRaw) throw new Error('Ingrese los requisitos de hosts');
                
                const hostItems = hostsRaw.split(',').map(s => parseInt(s.trim(), 10)).filter(x => !isNaN(x));
                if (hostItems.length === 0) throw new Error('No hay números válidos en la lista');
                
                const order = document.getElementById('order').value;
                const res = calculateVLSM(base, hostItems, order);

                // Mostrar información de la red base
                let html = \`
                    <div class="network-info">
                        <strong>📋 Red Base:</strong> \${res.baseNetwork}/\${res.basePrefix}<br>
                        <strong>🌐 Broadcast:</strong> \${res.baseBroadcast}<br>
                        <strong>🔢 Subredes Creadas:</strong> \${res.assigned.length}
                    </div>
                \`;

                // Crear tabla de resultados
                if (res.assigned.length > 0) {
                    html += \`
                        <table>
                            <thead>
                                <tr>
                                    <th>Subred</th>
                                    <th>Hosts Req.</th>
                                    <th>Network</th>
                                    <th>Prefijo</th>
                                    <th>Máscara</th>
                                    <th>Broadcast</th>
                                    <th>1° Usable</th>
                                    <th>Último Usable</th>
                                    <th>Hosts Útiles</th>
                                </tr>
                            </thead>
                            <tbody>
                    \`;

                    res.assigned.forEach(r => {
                        html += \`
                            <tr>
                                <td><span class="subnet-badge">\${r.label}</span></td>
                                <td>\${r.requestedHosts}</td>
                                <td>\${r.network}</td>
                                <td>/\${r.assignedPrefix}</td>
                                <td>\${r.mask}</td>
                                <td>\${r.broadcast}</td>
                                <td>\${r.firstUsable}</td>
                                <td>\${r.lastUsable}</td>
                                <td>\${r.usableHosts}</td>
                            </tr>
                        \`;
                    });

                    html += \`</tbody></table>\`;
                }

                output.innerHTML = html;
                
            } catch (error) {
                output.innerHTML = \`
                    <div class="error">
                        <strong>❌ Error:</strong> \${error.message}
                    </div>
                \`;
            }
        });

        // Ejemplo automático al cargar
        setTimeout(() => {
            document.getElementById('calcBtn').click();
        }, 1000);
    </script>
</body>
</html>`;

const CalculadoraVLSM = ({ onClose }) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Simular carga inicial
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 bg-black/95 backdrop-blur-xl z-50 overflow-y-auto">
      {/* Header personalizado */}
      <div className="sticky top-0 bg-gradient-to-r from-slate-900/90 to-purple-900/90 backdrop-blur-xl border-b border-white/10 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <button
                onClick={onClose}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110"
              >
                <ArrowLeft className="w-6 h-6 text-white" />
              </button>
              <div className="flex items-center space-x-3">
                <Network className="w-8 h-8 text-cyan-400" />
                <div>
                  <h2 className="text-2xl font-bold text-white">Calculadora VLSM</h2>
                  <p className="text-sm text-gray-300">Herramienta profesional de subnetting</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={onClose}
                className="p-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 transition-all duration-300 hover:scale-110 shadow-lg"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-gray-900 to-slate-900 rounded-2xl shadow-2xl overflow-hidden border border-white/10">
              {isLoading ? (
                <div className="h-[600px] flex items-center justify-center bg-gradient-to-br from-gray-900 to-slate-900">
                  <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-500 mx-auto mb-4"></div>
                    <p className="text-gray-300">Cargando calculadora...</p>
                  </div>
                </div>
              ) : (
                <iframe
                  srcDoc={htmlContent}
                  title="Calculadora VLSM"
                  className="w-full h-[600px] border-0"
                  sandbox="allow-scripts allow-same-origin"
                  onLoad={() => setIsLoading(false)}
                />
              )}
            </div>
          </div>

          {/* Panel lateral informativo */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/20">
              <div className="flex items-center space-x-3 mb-4">
                <Zap className="w-6 h-6 text-cyan-400" />
                <h3 className="text-xl font-bold text-white">¿Qué es VLSM?</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                VLSM (Variable Length Subnet Mask) permite dividir una red en subredes de diferentes tamaños,
                optimizando el uso de direcciones IP. Esencial para diseño eficiente de redes.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="w-6 h-6 text-purple-400" />
                <h3 className="text-xl font-bold text-white">Características</h3>
              </div>
              <ul className="space-y-3 text-sm">
                {[
                  '✅ Cálculo preciso de subredes',
                  '✅ Soporte para /31 y /32',
                  '✅ Validación de IPs',
                  '✅ Optimización automática',
                  '✅ Resultados detallados',
                  '✅ Interface responsive'
                ].map((item, idx) => (
                  <li key={idx} className="text-gray-300 flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-emerald-900/20 to-green-900/20 backdrop-blur-sm rounded-2xl p-6 border border-emerald-500/20">
              <div className="flex items-center space-x-3 mb-4">
                <Globe className="w-6 h-6 text-emerald-400" />
                <h3 className="text-xl font-bold text-white">Ejemplos de uso</h3>
              </div>
              <div className="space-y-3 text-sm">
                <div className="bg-black/30 rounded-lg p-3">
                  <p className="text-emerald-300 font-mono text-xs">Red: 192.168.0.0/24</p>
                  <p className="text-gray-300">Hosts: 100, 50, 30, 10</p>
                </div>
                <div className="bg-black/30 rounded-lg p-3">
                  <p className="text-emerald-300 font-mono text-xs">Red: 172.16.0.0/16</p>
                  <p className="text-gray-300">Hosts: 1000, 500, 200</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculadoraVLSM;
