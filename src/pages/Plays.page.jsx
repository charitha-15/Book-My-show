import React from "react";

//component
import Poster from "../components/Poster/poster.component";
import PlaysFilter from "../components/PlaysFilters/PlaysFilters.component";

const Plays = () => {
    return (
        <>
         <div className="container mx-auto px-4">
             <div className="w-full lg:flex lg:flex-row-reverse">
            <div className="lg:w-3/4">
            <h2 className="text-2xl font-bold mb-4">Plays in Vijayawada</h2>
             <div className="flex flex-wrap ">
                 <div className="w-1/2 md:w-1/3 my-3">
                 <Poster src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNCBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00309696-fsqhgswrqc-portrait.jpg"
                 title="`Kanthamathi` (Sadarame) Surabhi Theatre Play"
                 subtitle="Telugu -> ₹100"/>
                 </div>
                 <div className="w-1/2 md:w-1/3 my-3">
                 <Poster src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNCBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00312741-mxlqxsbhrh-portrait.jpg"
                 title="`Generations"
                 subtitle="English/Hindi -> ₹150 onwards"/>
                 </div>
                 <div className="w-1/2 md:w-1/3 my-3">
                 <Poster src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAzMSBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00312831-rzdltgpbpx-portrait.jpg"
                 title="Admission - 31st July (Saturday)"
                 subtitle="English -> ₹199 onwards"/>
                 </div>
                 <div className="w-1/2 md:w-1/3 my-3">
                 <Poster src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNCBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00311042-wmtzbczsdj-portrait.jpg"
                 title="Ellamae Thamash Than"
                 subtitle="Tamil -> ₹150"/>
                 </div>
                 <div className="w-1/2 md:w-1/3 my-3">
                 <Poster src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNCBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00309176-acvpbmcyev-portrait.jpg"
                 title="`Sri Venkateswara Udbhavam` Surabhi Theatre Play"
                 subtitle="Telugu -> ₹100"/>
                 </div>
                 <div className="w-1/2 md:w-1/3 my-3">
                 <Poster src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNCBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00309050-fsgpqjlfhw-portrait.jpg"
                 title="`BHAKTHA PRAHLADA` Surabhi Theatre Play"
                 subtitle="Telugu -> ₹100"/>
                 </div>
                 
             </div>
            </div>
            
            <div className="lg:w-3/12">
            <h2 className="text-2xl font-bold mb-4">Filters</h2>
            <div>
            <PlaysFilter
                title="Date"
                tags={["Today", "Tomorrow", "This Weekend"]}
            />
            <PlaysFilter
                title="Language"
                tags={["Telugu", "Tamil", "English", "Hindi"]}
            />
            <PlaysFilter
                title="Categories"
                tags={["Theatre"]}
            />
            <PlaysFilter
                title="Genres"
                tags={["Drama", "Adaptation", "Historical", "Comedy", "Mythological", "Online Streaming Plays"]}
            />
            <PlaysFilter
                title="More Filters"
                tags={["Online Streaming", "Kids Events", "Outdoor Events"]}
            />
            <PlaysFilter
                title="Price"
                tags={["Free", "0-500", "501-2000", "Above 2000"]}
            />
            </div>
            </div>
            </div>
         </div>
        </>
    );
};

export default Plays;