import { LinkData } from "../../../types/link-data-type";

function PreviewLink(link: LinkData) {
  console.log('sdkhaskjdh');
  
  if (!link) return;

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h3>PreviewLink</h3>
      <div className="max-w-md">
        <figure className="w-full h-59">
          <img
            className="w-full h-full object-contain"
            src={link.data.image.url}
          ></img>
        </figure>
        <div className="flex flex-col justify-center items-start px-4">
          <div className="flex items-center gap-4">
            <img
              className="w-15 rounded-full"
              src={link.data.logo.url}
              alt=""
            />
            <h4>{link.data.title}</h4>
          </div>
          <p className="mt-4">{link.data.description}</p>
        </div>
      </div>
    </div>
  );
}

export default PreviewLink;
