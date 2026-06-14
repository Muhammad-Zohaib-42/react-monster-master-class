import { useState, useTransition, type ChangeEvent } from "react"
import { FaCamera, FaDownload, FaHome, FaMobile, FaVideo } from "react-icons/fa"
import Home from "../pages/Home"
import Videos from "../pages/Videos"
import Shorts from "../pages/Shorts"
import Downloads from "../pages/Downloads"

type Tabs = 'home' | 'videos' | 'shorts' | 'downloads'

const Profile = () => {
  const [activeTab, setActiveTab] = useState<Tabs>('home')
  const [bannerImage, setBannerImage] = useState("https://preview.redd.it/specific-can-anyone-help-me-fit-this-image-into-a-youtube-v0-mqwejrdrhm421.jpg?width=1080&crop=smart&auto=webp&s=c54aa168ab4d3bab31d4c0b55b48713d52aa6f96")
  const [profileImage, setProfileImage] = useState("https://media.easy-peasy.ai/4e600a82-8aac-4abb-95cd-f87cc9125a0f/18ea5802-d34e-4fbb-91e2-99baebb2eac9_medium.webp")
  const [isPending, startTransition] = useTransition()

  function handleTabChange(tab: Tabs) {
    startTransition(() => {
        setActiveTab(tab)
    })
  }

  function renderTab() {
    switch (activeTab) {
        case 'home':
            return <Home />
            break
        case 'videos':
            return <Videos />
            break;
        case 'shorts':
            return <Shorts />
            break;
        case 'downloads':
            return <Downloads />
        default:
            return <Home />
    }
  }

  function handleBannerImage(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files![0]

    if (file) {
        setBannerImage(URL.createObjectURL(file))
    }
  }

  function handleProfileImage(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files![0]

    if (file) {
        setProfileImage(URL.createObjectURL(file))
    }
  }

  return (
    <main className="pl-20">
        <div className="relative w-full h-52 bg-slate-100 overflow-hidden">
            <img className="w-full h-full object-contain" src={bannerImage} alt="" />
            <label htmlFor="banner-image" className="h-8 w-8 bg-slate-300 rounded-full flex items-center justify-center absolute top-3 right-3 cursor-pointer">
                <FaCamera size={18} />
            </label>
            <input type="file" name="banner-image" id="banner-image" className="hidden" onChange={handleBannerImage} />
        </div>
        <div className="p-5 flex gap-5 items-center">
            <div className="h-24 w-24 rounded-full bg-slate-100 relative shrink-0">
                <img className="w-full h-full rounded-full object-cover" src={profileImage} alt="" />
                <label htmlFor="profile-image" className="h-8 w-8 bg-slate-300 rounded-full flex items-center justify-center absolute -bottom-2 left-1/2 -translate-x-1/2 cursor-pointer">
                    <FaCamera />
                </label>
                <input className="hidden" type="file" id="profile-image" onChange={handleProfileImage} />
            </div>
            <div className="text-slate-800">
                <h1 className="font-semibold">Muhammad Zohaib</h1>
                <p className="text-sm mb-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, ipsum facilis nobis maiores impedit a perferendis fugit sint vero rem?</p>
                <button className="px-4 py-1.5 rounded-full bg-green-300 hover:bg-green-400 transition cursor-pointer text-sm">Subscribe</button>
            </div>
        </div>
        <div className="p-8">
            <div className="flex">
                <button onClick={() => handleTabChange('home')} className={`flex gap-1.5 items-center justify-center cursor-pointer border-b border-b-slate-200 text-slate-700 transition hover:text-slate-800 px-5 py-3 grow ${activeTab == 'home' && 'border-b-slate-400 text-slate-900'}`}>
                    <FaHome size={18} />
                    Home
                </button>
                <button onClick={() => handleTabChange('videos')} className={`flex gap-1.5 items-center justify-center cursor-pointer border-b border-b-slate-200 text-slate-700 transition hover:text-slate-800 px-5 py-3 grow ${activeTab == 'videos' && 'border-b-slate-400 text-slate-900'}`}>
                    <FaVideo size={18} />
                    Videos
                </button>
                <button onClick={() => handleTabChange('shorts')} className={`flex gap-1.5 items-center justify-center cursor-pointer border-b border-b-slate-200 text-slate-700 transition hover:text-slate-800 px-5 py-3 grow ${activeTab == 'shorts' && 'border-b-slate-400 text-slate-900'}`}>
                    <FaMobile size={18} />
                    Shorts
                </button>
                <button onClick={() => handleTabChange('downloads')} className={`flex gap-1.5 items-center justify-center cursor-pointer border-b border-b-slate-200 text-slate-700 transition hover:text-slate-800 px-5 py-3 grow ${activeTab == 'downloads' && 'border-b-slate-400 text-slate-900'}`}>
                    <FaDownload size={18} />
                    Downloads
                </button>
            </div>
            <div>
                {
                    isPending ? <section className="p-5">
                        <p>Loading...</p>
                    </section> : renderTab()
                }
            </div>
        </div>
    </main>
  )
}

export default Profile