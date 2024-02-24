// Write your JS code here
import BlogItem from '../BlogItem/index'

import './index.css'

const BlogList = props => {
  const {blogDetails} = props
  return (
    <div className="blogList-container">
      <BlogItem blogDetails={blogDetails} />
    </div>
  )
}
export default BlogList
