import React, { useState } from 'react';
import { X, Sun, BatteryCharging, Zap, Check, ArrowRight, Calculator } from 'lucide-react';

interface SolarEstimatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyEstimate: (service: string, summary: string) => void;
}

export const SolarEstimatorModal: React.FC<SolarEstimatorModalProps> = ({
  isOpen,
  onClose,
  onApplyEstimate,
}) => {
  const [propertyType, setPropertyType] = useState<'Home' | 'Office' | 'Commercial'>('Home');
  const [selectedAppliances, setSelectedAppliances] = useState<string[]>([
    'Lighting & Fans',
    'TV & Home Electronics',
  ]);
  const [backupHours, setBackupHours] = useState<'6' | '12' | '24'>('12');

  if (!isOpen) return null;

  const applianceOptions = [
    { id: 'Lighting & Fans', label: 'Lighting & Ceiling/Standing Fans', power: 'Low' },
    { id: 'TV & Home Electronics', label: 'TV, Decoder & Sound System', power: 'Low' },
    { id: 'Fridge & Freezer', label: 'Refrigerator / Deep Freezer', power: 'Medium' },
    { id: 'Computers & Network', label: 'Computers, Printers & Wi-Fi Routers', power: 'Medium' },
    { id: 'Pumping Machine', label: 'Water Pumping Machine (Summersible/Surface)', power: 'Heavy' },
    { id: 'Inverter Air Conditioner', label: 'Energy Efficient Inverter AC', power: 'Heavy' },
  ];

  const toggleAppliance = (id: string) => {
    setSelectedAppliances((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Calculate recommended system sizing based on selections
  const calculateRecommendation = () => {
    const hasHeavy = selectedAppliances.includes('Pumping Machine') || selectedAppliances.includes('Inverter Air Conditioner');
    const hasMedium = selectedAppliances.includes('Fridge & Freezer') || selectedAppliances.includes('Computers & Network');
    
    if (hasHeavy) {
      return {
        inverter: '5.0kVA - 7.5kVA Pure Sine Wave Inverter',
        battery: backupHours === '24' ? '48V (4x 220Ah Tubular or 5kWh Lithium)' : '48V (4x 200Ah Deep Cycle Battery Bank)',
        solarPanels: '6 to 10 Mono-crystalline Solar Panels (450W - 550W each)',
        tier: 'Heavy-Duty / Continuous Duty Package',
      };
    } else if (hasMedium) {
      return {
        inverter: '2.5kVA - 3.5kVA Pure Sine Wave Inverter',
        battery: backupHours === '24' ? '24V (2x 220Ah Tubular Batteries)' : '24V (2x 200Ah Deep Cycle Batteries)',
        solarPanels: '4 to 6 Mono-crystalline Solar Panels (400W+)',
        tier: 'Standard Residential / Office Power Package',
      };
    } else {
      return {
        inverter: '1.2kVA - 1.5kVA Inverter System',
        battery: '12V (1x or 2x 200Ah Tubular Battery)',
        solarPanels: '2 to 4 High-Efficiency Solar Panels',
        tier: 'Essential Lighting & Basic Electronics Package',
      };
    }
  };

  const rec = calculateRecommendation();

  const handleApply = () => {
    const summary = `Estimated Solar Sizing Assessment:\n- Property: ${propertyType}\n- Selected Loads: ${selectedAppliances.join(', ') || 'Basic'}\n- Target Daily Backup: ${backupHours} Hours\n- Recommended Sizing: ${rec.inverter} with ${rec.battery} and ${rec.solarPanels}`;
    onApplyEstimate('Solar Energy', summary);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600">
            <Calculator className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900">
              Interactive Solar Load Sizing Helper
            </h3>
            <p className="text-xs text-slate-500">
              Quick load assessment tailored for Jos and Nigerian power conditions
            </p>
          </div>
        </div>

        {/* Step 1: Property Type */}
        <div className="space-y-4 text-left">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              1. Property Type
            </label>
            <div className="grid grid-cols-3 gap-2">
              {(['Home', 'Office', 'Commercial'] as const).map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setPropertyType(type)}
                  className={`py-2 px-3 rounded-lg text-xs sm:text-sm font-semibold border transition-all cursor-pointer ${
                    propertyType === type
                      ? 'bg-slate-900 text-white border-slate-900'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {type === 'Home' ? 'Residential Home' : type === 'Office' ? 'Office Setup' : 'Commercial Facility'}
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Appliances */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              2. Key Appliances to Power via Solar/Inverter
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {applianceOptions.map((app) => {
                const isChecked = selectedAppliances.includes(app.id);
                return (
                  <div
                    key={app.id}
                    onClick={() => toggleAppliance(app.id)}
                    className={`p-2.5 rounded-lg border text-xs flex items-center justify-between cursor-pointer transition-colors ${
                      isChecked
                        ? 'bg-emerald-50/70 border-emerald-400 text-emerald-950 font-medium'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <span>{app.label}</span>
                    <div
                      className={`w-4 h-4 rounded flex items-center justify-center border shrink-0 ${
                        isChecked
                          ? 'bg-emerald-600 border-emerald-600 text-white'
                          : 'border-slate-300 bg-white'
                      }`}
                    >
                      {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Step 3: Desired Backup Hours */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              3. Target Daily Inverter Backup Requirement
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { value: '6', label: '6 - 8 Hours' },
                { value: '12', label: '12 - 16 Hours' },
                { value: '24', label: '24/7 Full Backup' },
              ].map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => setBackupHours(opt.value as any)}
                  className={`py-2 px-3 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                    backupHours === opt.value
                      ? 'bg-emerald-600 text-white border-emerald-600'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Technical Recommendation Output */}
          <div className="mt-4 p-4 rounded-xl bg-slate-900 text-white space-y-3">
            <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-800 pb-2">
              <span className="font-bold uppercase tracking-wider text-emerald-400">
                Recommended Sizing Profile:
              </span>
              <span className="text-slate-300">{rec.tier}</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700">
                <span className="text-slate-400 block mb-1">Inverter System</span>
                <span className="font-bold text-white block">{rec.inverter}</span>
              </div>
              <div className="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700">
                <span className="text-slate-400 block mb-1">Battery Storage</span>
                <span className="font-bold text-white block">{rec.battery}</span>
              </div>
              <div className="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700">
                <span className="text-slate-400 block mb-1">Solar PV Array</span>
                <span className="font-bold text-white block">{rec.solarPanels}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Action buttons */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-slate-100">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-600 hover:bg-slate-100 rounded-lg cursor-pointer"
          >
            Close
          </button>
          
          <button
            type="button"
            onClick={handleApply}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-sm cursor-pointer"
          >
            <span>Attach Sizing & Request Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
