import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export interface TechItem {
    id: string;
    name: string;
    category: string;
    description: string;
    icon: string;
    rating: number;
    difficulty: string;
    badge: string;
}

export const Technologies: React.FC = () => {
    const [techData, setTechData] = useState<TechItem[]>([]);
    const [selectedStack, setSelectedStack] = useState<TechItem[]>([]);


useEffect(() => {
    const fetchTechData = async () => {
        const res = await fetch('/data.json');
        const data = await res.json();
        setTechData(data);
    };

        fetchTechData();
    }, []);


const handleAddToStack = (tech: TechItem) => {
    const isAlreadyAdded = selectedStack.some((item) => item.id === tech.id);

    if (isAlreadyAdded) {
                toast.info(`${tech.name} is already in your stack!`, {
                position: 'bottom-right',
            });
        return;
    }

    setSelectedStack([...selectedStack, tech]);
    toast.success(`${tech.name} added to your stack!`, {
        position: 'bottom-right',
    });
};


const handleRemoveFromStack = (tech: TechItem) => {
    const updatedStack = selectedStack.filter((item) => item.id !== tech.id);
    setSelectedStack(updatedStack);
    toast.error(`${tech.name} removed from your stack!`, {
        position: 'bottom-right',
    });
};


const handleRemoveAll = () => {
    setSelectedStack([]);
    toast.warn('All items removed from your stack!', {
        position: 'bottom-right',
    });
};

return (
    <section className="container mx-auto px-6 py-12" id="Technologies">
        <div className="mb-10">
            <h2 className="text-4xl font-extrabold text-slate-900">
                Explore the{' '}
                <span className="text-[#DB2777]">Technologies</span>
            </h2>
            <p className="mt-2 text-slate-500 font-medium">
                Pick one technology per category to build your ideal stack.
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">

        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techData.map((tech) => {
            const isAdded = selectedStack.some((item) => item.id === tech.id);

            return (
                <div
                    key={tech.id}
                    className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
                >
                <div>
                    <div className="flex items-center justify-between mb-4">
                        <img src={tech.icon} alt={tech.name} className="w-10 h-10 object-contain" />
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-cyan-50 text-cyan-600">
                            {tech.badge}
                        </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-2">{tech.name}</h3>
                    <p className="text-slate-500 text-xs leading-relaxed mb-6">
                        {tech.description}
                    </p>
                </div>

                <div>
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-4">
                        <span className="bg-slate-100 px-2 py-0.5 rounded text-slate-600">
                            {tech.category}
                        </span>
                        <span>{tech.difficulty}</span>
                        <span className="font-semibold text-slate-700">★ {tech.rating}</span>
                    </div>

                    <button
                        onClick={() => handleAddToStack(tech)}
                        disabled={isAdded}
                        className={`w-full py-2.5 rounded-xl font-semibold text-sm transition-all ${
                            isAdded
                            ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                            : 'bg-[#0F172A] hover:bg-[#1E293B] text-white shadow-sm'
                        }`}
                    >
                        {isAdded ? 'Added to Stack' : 'Add to Stack'}
                    </button>
                </div>
            </div>
            );
            })}
        </div>


        <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm sticky top-28">
            <h3 className="text-lg font-bold text-slate-900">Your Stack</h3>
            <p className="text-xs text-slate-400 mb-6">
                {selectedStack.length > 0
                ? `${selectedStack.length} Technology Selected`
                : 'No technologies selected yet.'}
            </p>

            {selectedStack.length === 0 ? (
            <div className="border border-dashed border-slate-200 rounded-xl p-8 text-center">
                <p className="text-xs text-slate-400 font-medium">Your stack is empty.</p>
            </div>
            ) : (
            <div className="space-y-3 mb-6 max-h-96 overflow-y-auto pr-1">
                {selectedStack.map((item) => (
                    <div
                        key={item.id}
                        className="flex items-center justify-between p-3 rounded-xl border border-slate-100 bg-slate-50/50"
                    >
                    <div className="flex items-center gap-3">
                        <img src={item.icon} alt={item.name} className="w-7 h-7 object-contain" />
                        <div>
                            <h4 className="text-xs font-bold text-slate-800">{item.name}</h4>
                            <span className="text-[10px] text-slate-400">{item.category}</span>
                        </div>
                    </div>
                    <button
                    onClick={() => handleRemoveFromStack(item)}
                    className="text-slate-400 hover:text-rose-500 font-bold px-1"
                    >
                    ✕
                    </button>
                </div>
                ))}
            </div>
        )}

            {selectedStack.length > 0 && (
            <button
                onClick={handleRemoveAll}
                className="w-full py-2 rounded-xl border border-rose-200 text-rose-500 hover:bg-rose-50 font-semibold text-xs transition-colors"
            >
                Remove All
            </button>
            )}
        </div>
    </div>
    </section>
);
};

export default Technologies;