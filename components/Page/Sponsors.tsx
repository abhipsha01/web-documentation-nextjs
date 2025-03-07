import * as React from 'react';
import { useTranslation } from 'react-i18next';
import sponsors from '../../sponsors.json';

export interface ISponsorsProps {}

export const Sponsors: React.FunctionComponent<ISponsorsProps> = (props: React.PropsWithChildren<ISponsorsProps>) => {
  const { t: strings } = useTranslation();
  
  return (
    <div className="bg-vulcan-600">
      <div className="max-w-7xl mx-auto pt-12 px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold uppercase text-whisper-900 tracking-wide">
          {strings(`sponsors_title`)}
        </p>

        {
          sponsors && sponsors.individuals && sponsors.individuals.length > 0 && (
            <div className="mt-6 flex justify-center space-x-4">
              {
                sponsors.individuals.map((sponsor) => (
                  <a key={sponsor.url} target={`_blank`}  rel={`noopener noreferrer`} href={sponsor.url} title={`Thanks ${sponsor.name}!`}>
                    <img className="h-12 rounded-full border-2 border-transparent hover:border-whisper-500" src={sponsor.avatar} />
                  </a>
                ))
              }
            </div>
          )
        }

        {
          sponsors && sponsors.companies && sponsors.companies.length > 0 && (
            <div className="mt-6">
              {
                sponsors.companies.map((sponsor) => (
                  <a key={sponsor.id} target={`_blank`}  rel={`noopener noreferrer`} href={sponsor.url} title={sponsor.title} className="col-span-1 flex justify-center">
                    <img className="h-12" src={sponsor.image} alt={sponsor.alt} />
                  </a>
                ))
              }
            </div>
          )
        }
      </div>
    </div>
  );
};