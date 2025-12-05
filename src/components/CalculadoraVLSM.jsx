import React, { useState, useEffect } from 'react';
import { X, ArrowLeft, Cpu, Zap, Shield, Globe, Calculator, Network } from 'lucide-react';

const CalculadoraVLSM = ({ onClose }) => {
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    // Importar el archivo HTML desde assets
    fetch('/assets/calculadora-vlsm.html')
      .then(response => {
        if (!response.ok) {
          throw new Error('No se pudo cargar el archivo HTML');
        }
        return response.text();
      })
      .then(data => setHtmlContent(data))
      .catch(error => {
        console.error('Error loading HTML:', error);
        // HTML de respaldo en caso de error
        setHtmlContent(`
          <!DOCTYPE html>
          <html>
          <body style="background:#0f172a;color:white;padding:20px;">
            <h1 style="color:#0ea5a4">Calculadora VLSM</h1>
            <p>Cargando calculadora...</p>
          </body>
          </html>
        `);
      });
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
              {htmlContent ? (
                <iframe
                  srcDoc={htmlContent}
                  title="Calculadora VLSM"
                  className="w-full h-[600px] border-0"
                  sandbox="allow-scripts allow-same-origin"
                />
              ) : (
                <div className="h-[600px] flex items-center justify-center bg-gradient-to-br from-gray-900 to-slate-900">
                  <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-500 mx-auto mb-4"></div>
                    <p className="text-gray-300">Cargando calculadora...</p>
                  </div>
                </div>
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
