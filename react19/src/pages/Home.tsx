import VideoCard from "../components/VideoCard";

const Home = () => {
  return (
    <section className="p-5 grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-5">
      {Array.from({ length: 6 }).map(() => (
        <VideoCard
          thumbnailUrl="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=640&h=360&fit=crop"
          title="Building a YouTube Clone with React and Tailwind CSS"
          channelName="Code Tutorials"
          views="1.2M views"
          timestamp="2 years ago"
          duration="12:45"
        />
      ))}
    </section>
  );
};

export default Home;
