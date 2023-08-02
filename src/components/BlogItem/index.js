// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {item} = props
  const {title, imageUrl, avatarUrl, author, topic, id} = item
  return (
    <li>
      <Link to={`/blogs/${id}`}>
        <div className="blogitem-division">
          <div>
            <img src={imageUrl} alt={title} className="image-div" />
          </div>
          <div className="blogitem-title">
            <h1>{topic}</h1>
            <h1>{title}</h1>
            <div className="blogitem-avatar">
              <img className="avatar-image" src={avatarUrl} alt={title} />
              <p>{author}</p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default BlogItem
