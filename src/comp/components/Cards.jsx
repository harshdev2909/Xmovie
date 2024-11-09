import { FocusCards } from "./ui/focus-cards";

export function FocusCardsDemo() {
  const cards = [
    {
      title: "Forest Adventure",
      src: "https://hips.hearstapps.com/hmg-prod/images/christmas-movies-for-kids-1639008083.png?crop=0.9554140127388535xw:1xh;center,top&resize=980:*",
    },
    {
      title: "Wish",
      src: "https://lumiere-a.akamaihd.net/v1/images/daylight_payoff_poster_philippines_ab66d6e4.jpeg?region=0%2C0%2C770%2C1100",
    },
    {
      title: "Sala behta hi jayega",
      src: "https://d32qys9a6wm9no.cloudfront.net/images/movies/poster/0f/0a500489fccd07159b93272dc3d08027_300x442.jpg?t=1726710803",
    },
    {
      title: "Camping is for pros",
      src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00383474-klabltwbvz-portrait.jpg",
    },
    {
      title: "The road not taken",
      src: "https://akamaividz2.zee5.com/image/upload/w_756,h_1134,c_scale,f_webp,q_auto:eco/resources/0-0-1z5625776/portrait/1920x77082a2706ca72648e3876e420ca77cef4f3c87bb74f88247d593969c3b46c43586.jpg",
    },
    {
      title: "The First Rule",
      src: "https://berkleyspectator.com/wp-content/uploads/2022/01/vgPj2F128qtShMaT9DNa8ODtWUFhqqrFPEUWfTRo-e1642785179405-683x900.jpeg",
    },
  ];

  return <FocusCards cards={cards} />;
}
