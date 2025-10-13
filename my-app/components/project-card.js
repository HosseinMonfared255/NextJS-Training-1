function ProjectCard({ imageUrl, imageAlt, title, description, status }) {
    return (
      <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:-translate-y-1 hover:shadow-xl transition">
        <img
          src={imageUrl}
          alt={imageAlt}
          className="w-full h-48 object-cover"
        />
        <div className="p-5">
          <h3 className="text-xl font-bold text-gray-900 mb-2.5">
            {title}
          </h3>
          <p className="text-base text-gray-600 mb-4">
            {description}
          </p>
          <span className="inline-block px-3 py-1.5 rounded-full text-sm font-medium bg-green-50 text-green-700">
            {status}
          </span>
        </div>
      </div>
    );
  }
  
  export default ProjectCard;


  