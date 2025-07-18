import React from 'react';
import { ShieldCheck, Syringe, FileText, UserCheck } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Middleone = () => {
    const { t } = useTranslation();
    const steps = [
        {
            icon: <UserCheck className="w-5 h-5" />,
            title: t('benefits.steps.vaccinated.title'),
            description: t('benefits.steps.vaccinated.description'),
            color: "blue"
        },
        {
            icon: <ShieldCheck className="w-5 h-5" />,
            title: t('benefits.steps.safety.title'),
            description: t('benefits.steps.safety.description'),
            color: "green"
        },
        {
            icon: <Syringe className="w-5 h-5" />,
            title: t('benefits.steps.sample.title'),
            description: t('benefits.steps.sample.description'),
            color: "red"
        },
        {
            icon: <FileText className="w-5 h-5" />,
            title: t('benefits.steps.reports.title'),
            description: t('benefits.steps.reports.description'),
            color: "purple"
        },
    ];


    const benefits = [
        { text: t('benefits.benefitsList.fast'), icon: "⚡" },
        { text: t('benefits.benefitsList.booking'), icon: "🖱️" },
        { text: t('benefits.benefitsList.homeCollection'), icon: "🏠" },
        { text: t('benefits.benefitsList.safe'), icon: "🔒" },
    ];

    const getColorClasses = (color) => {
        const colors = {
            blue: {
                bg: "bg-blue-100 dark:bg-blue-900/30",
                text: "text-blue-600 dark:text-blue-400",
                iconBg: "bg-blue-50 dark:bg-blue-900/20"
            },
            green: {
                bg: "bg-green-100 dark:bg-green-900/30",
                text: "text-green-600 dark:text-green-400",
                iconBg: "bg-green-50 dark:bg-green-900/20"
            },
            red: {
                bg: "bg-red-100 dark:bg-red-900/30",
                text: "text-red-600 dark:text-red-400",
                iconBg: "bg-red-50 dark:bg-red-900/20"
            },
            purple: {
                bg: "bg-purple-100 dark:bg-purple-900/30",
                text: "text-purple-600 dark:text-purple-400",
                iconBg: "bg-purple-50 dark:bg-purple-900/20"
            }
        };
        return colors[color] || colors.blue;
    };

    return (
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-10 sm:mb-12 lg:mb-16">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                        {t('benefits.title')}
                    </h2>
                    <p className="text-sm sm:text-base text-blue-600 dark:text-blue-400">
                    {t('benefits.subtitle')} <span className="text-xs">{t('benefits.terms')}</span>
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
                    {/* Left side: How it works */}
                    <div className="space-y-6 sm:space-y-8">
                        <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-200">
                            {t('benefits.howItWorks')}
                        </h3>
                        <div className="space-y-4 sm:space-y-6">
                            {steps.map((step, index) => {
                                const colorClasses = getColorClasses(step.color);
                                return (
                                    <div 
                                        key={index} 
                                        className={`flex gap-4 sm:gap-6 items-start p-4 sm:p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 ${colorClasses.bg}`}
                                    >
                                        <div className={`w-10 h-10 flex items-center justify-center rounded-full ${colorClasses.iconBg} ${colorClasses.text}`}>
                                            {step.icon}
                                        </div>
                                        <div className="flex-1">
                                            <h4 className={`text-base sm:text-lg font-semibold mb-1 ${colorClasses.text}`}>
                                                {step.title}
                                            </h4>
                                            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right side: Why book lab tests */}
                    <div className="space-y-6 sm:space-y-8">
                        <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-200">
                            {t('benefits.whyBook')}
                        </h3>
                        <div className="grid grid-cols-2 gap-4 sm:gap-6">
                            {benefits.map((benefit, index) => (
                                <div 
                                    key={index}
                                    className="bg-white dark:bg-gray-800 p-4 sm:p-5 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 group"
                                >
                                    <div className="text-2xl sm:text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                                        {benefit.icon}
                                    </div>
                                    <p className="text-sm sm:text-base font-semibold text-blue-700 dark:text-blue-400">
                                        {benefit.text}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Additional Info */}
                        <div className="mt-6 sm:mt-8 p-4 sm:p-5 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                                <span className="font-semibold text-blue-600 dark:text-blue-400">{t('benefits.note')}:</span> {t('benefits.noteText')}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Middleone;