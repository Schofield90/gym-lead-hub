export interface GymConfig {
  subdomain: string;
  name: string;
  location: string;
  demographic: string;
  demographicAdjective: string;
  ageRange: string;
  age: string;
  programDuration: string;
  spotsAvailable: string;
  trainerName: string;
  testimonials: {
    long: {
      name: string;
      quote: string;
    };
    video: Array<{
      name: string;
      inches: string;
      weight: string;
      time?: string;
      dressSizes?: string;
    }>;
  };
}

export const gyms: Record<string, GymConfig> = {
  randbfitness: {
    subdomain: 'randbfitness',
    name: 'R&B Fitness',
    location: 'Bedford',
    demographic: 'Busy Women',
    demographicAdjective: 'women',
    ageRange: 'Over 30',
    age: '30',
    programDuration: '6 Week',
    spotsAvailable: '10',
    trainerName: 'the R&B team',
    testimonials: {
      long: {
        name: 'Sarah J., 34, Bedford',
        quote: 'Since I joined R&B Fitness in January this year, I have seen amazing results. Not only weight loss but a change in my relationship with food and more consistent motivation. I really feel I am finally putting my health first and enjoying exercising along the way. The support from the R&B team is amazing and the community R&B Fitness has fostered. I would highly recommend R&B Fitness for anyone looking to focus on their fitness and health and improve their quality of life overall, best decision I have ever made for myself and I am certain it would be for others as well.',
      },
      video: [
        {
          name: 'Emma T., 42, Bedford',
          inches: '12',
          weight: '14 lbs',
        },
        {
          name: 'Lisa M., 38, Kempston',
          inches: '15',
          weight: '18 lbs',
          time: '8 weeks',
          dressSizes: '2',
        },
        {
          name: 'Rachel B., 45, Bedford',
          inches: '10',
          weight: '12 lbs',
          time: '6 weeks',
          dressSizes: '1',
        },
      ],
    },
  },
  randbfitness50: {
    subdomain: 'randbfitness50',
    name: 'R&B Fitness',
    location: 'Bedford',
    demographic: 'Busy Women',
    demographicAdjective: 'women',
    ageRange: 'Over 50',
    age: '50',
    programDuration: '6 Week',
    spotsAvailable: '10',
    trainerName: 'the R&B team',
    testimonials: {
      long: {
        name: 'Sarah J., 54, Bedford',
        quote: 'Since I joined R&B Fitness in January this year, I have seen amazing results. Not only weight loss but a change in my relationship with food and more consistent motivation. I really feel I am finally putting my health first and enjoying exercising along the way. The support from the R&B team is amazing and the community R&B Fitness has fostered. I would highly recommend R&B Fitness for anyone looking to focus on their fitness and health and improve their quality of life overall, best decision I have ever made for myself and I am certain it would be for others as well.',
      },
      video: [
        {
          name: 'Emma T., 62, Bedford',
          inches: '12',
          weight: '14 lbs',
        },
        {
          name: 'Lisa M., 58, Kempston',
          inches: '15',
          weight: '18 lbs',
          time: '8 weeks',
          dressSizes: '2',
        },
        {
          name: 'Rachel B., 55, Bedford',
          inches: '10',
          weight: '12 lbs',
          time: '6 weeks',
          dressSizes: '1',
        },
      ],
    },
  },
};

export function getGymBySubdomain(subdomain: string): GymConfig | null {
  return gyms[subdomain] || null;
}
