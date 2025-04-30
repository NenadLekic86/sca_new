import { useEffect, useState, FC } from "react";
import { useTranslation } from "react-i18next";
import enFlag from '../../assets/images/flags/enFlag.png';
import srFlag from '../../assets/images/flags/srFlagNew.png';

interface Language {
  code: string;
  lang: string;
  flag: string;
}

const languages: Language[] = [
  {code: "en", lang: "EN", flag: enFlag},
  {code: "sr", lang: "SR", flag: srFlag},
];

interface LanguageSelectorProps {
  containerClass?: string;
  onLanguageChange?: () => void;
}

const LanguageSelector: FC<LanguageSelectorProps> = ({ containerClass , onLanguageChange }) => {
  const {i18n} = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [currentFlag, setCurrentFlag] = useState(enFlag); // Add state for current flag

  // Set initial flag based on i18n.language
  useEffect(() => {
    const currentLanguage = languages.find(lng => lng.code === i18n.language);
    setCurrentFlag(currentLanguage?.flag || enFlag);
  }, [i18n.language]);

  const changeLanguage = (lng: string) => {
    if (i18n.language !== lng) {
      i18n.changeLanguage(lng);
      const newFlag = languages.find(l => l.code === lng)?.flag || enFlag;
      setCurrentFlag(newFlag);
      if (onLanguageChange) {
        onLanguageChange();
      }
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const dropdown = document.getElementById('dropdown-menu');
      if (dropdown && !dropdown.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      setIsOpen(false);
    }
  };

  return (
    <div 
      className={`relative inline-block text-left ${containerClass}`}
      onKeyDown={handleKeyDown}
    >
      <div>
        <button
          type="button"
          className="btn btn-primary bg-transparent border-darkBlue-500-500 hover:bg-darkBlue-500 text-darkBlue-500 hover:text-white relative z-10 border-[1px] transition-transform duration-300 ease-out p-2 flex items-center justify-between min-w-[98px]"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
          onClick={() => setIsOpen(!isOpen)}
        >
          <img 
            src={currentFlag} 
            alt={`${languages.find(lng => lng.code === i18n.language)?.lang || 'EN'} flag`}
            className="w-[2rem] h-[1.5rem] mr-2" 
          />
          {languages.find(lng => lng.code === i18n.language)?.lang || "EN"}
          <svg className="-mr-1 ml-2 mt-[0.15rem] h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 111.414 1.414l-4 4a1 1 01-1.414 0l-4-4a1 1 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div
          id="dropdown-menu"
          className={`origin-top-right absolute right-0 w-full rounded-md shadow-lg border-darkBlue-500 border-[1px] transition-transform duration-300 ease-out z-50 bg-white focus:outline-none mt-2 ${isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-0 my-0" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {languages.map((lng) => (
              <button
                key={lng.code}
                className={`flex items-center gap-1 rounded-md w-full py-2 mb-2 last:mb-0 uppercase font-general text-[0.87rem] text-darkBlue-500 font-semibold hover:bg-orange-500 hover:text-darkBlue-500 hover:cursor-pointer ${lng.code === i18n.language ? "bg-orange-500 !text-white" : ""}`}
                onClick={() => changeLanguage(lng.code)}
                role="menuitem"
                aria-selected={lng.code === i18n.language}
              >
                <img src={lng.flag} alt={`${lng.lang} flag`} className="w-[2rem] h-[1.5rem] mr-2" />
                {lng.lang}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;