// components/LanguageSwitcher.js
import { useRouter } from 'next/router';

const LanguageSwitcher = () => {
  const router = useRouter();
  const { locale, locales, asPath } = router;

  const switchLanguage = (lang) => {
    router.push(asPath, asPath, { locale: lang });
  };

  return (
    <div>
      <span>Current Language: {locale.toUpperCase()}</span>
      <ul style={{ listStyle: 'none', display: 'flex', gap: '10px', padding: 0 }}>
        {locales.map((lang) => (
          <li key={lang}>
            <button
              onClick={() => switchLanguage(lang)}
              style={{
                cursor: 'pointer',
                background: lang === locale ? 'lightblue' : 'white',
                border: '1px solid gray',
                padding: '5px 10px',
                borderRadius: '5px',
              }}
            >
              {lang.toUpperCase()}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LanguageSwitcher;
