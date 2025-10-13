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
  'randbfitness-men': {
    subdomain: 'randbfitness-men',
    name: 'R&B Fitness',
    location: 'Bedford',
    demographic: 'Busy Men',
    demographicAdjective: 'men',
    ageRange: 'Over 30',
    age: '30',
    programDuration: '6 Week',
    spotsAvailable: '10',
    trainerName: 'the R&B team',
    testimonials: {
      long: {
        name: 'James T., 38, Bedford',
        quote: 'I was skeptical about group training, but R&B Fitness completely changed my perspective. The team understood that as a busy professional, I needed efficient workouts that delivered results. In just 6 weeks, I dropped 2 stone, gained muscle definition, and my energy levels are through the roof. The accountability and support from the R&B team kept me consistent even during my busiest weeks. Best investment I\'ve made in myself.',
      },
      video: [
        {
          name: 'Tom R., 35, Bedford',
          inches: '18',
          weight: '22 lbs',
        },
        {
          name: 'Michael S., 42, Kempston',
          inches: '15',
          weight: '28 lbs',
          time: '8 weeks',
        },
        {
          name: 'David K., 39, Bedford',
          inches: '14',
          weight: '19 lbs',
          time: '6 weeks',
        },
      ],
    },
  },
  aimeesplace: {
    subdomain: 'aimeesplace',
    name: "Aimee's Place",
    location: 'York',
    demographic: 'Busy Women',
    demographicAdjective: 'women',
    ageRange: 'Over 30',
    age: '30',
    programDuration: '28 Day',
    spotsAvailable: '15',
    trainerName: 'the Aimee\'s Place team',
    testimonials: {
      long: {
        name: 'Emma S., 36, York',
        quote: 'I was nervous about starting a fitness program, but Aimee\'s Place made everything so welcoming and achievable. In just 28 days, I lost over a stone, gained so much confidence, and completely changed my relationship with exercise. The support from the team was incredible, and I loved being part of a community of women who truly understood the challenges of balancing work, family, and health. This program gave me my energy and confidence back.',
      },
      video: [
        {
          name: 'Sarah K., 34, York',
          inches: '10',
          weight: '16 lbs',
        },
        {
          name: 'Rachel M., 39, York',
          inches: '12',
          weight: '14 lbs',
          time: '4 weeks',
          dressSizes: '1',
        },
        {
          name: 'Claire B., 42, York',
          inches: '9',
          weight: '12 lbs',
          time: '28 days',
          dressSizes: '1',
        },
      ],
    },
  },
};

export function getGymBySubdomain(subdomain: string): GymConfig | null {
  return gyms[subdomain] || null;
}
