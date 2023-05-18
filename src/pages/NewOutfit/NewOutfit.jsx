import { useState } from "react"

// services
import * as authService from '../../services/authService'

// css
import styles from './NewOutfit.module.css'

const NewOutfit = ({ handleAddOutfit }) => {
  const [formData, setFormData] = useState({
    description: '',
    photo: ''
  })

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    handleAddOutfit(formData)
  }

  return (
    <main className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputBox}>
          <h2>Image Upload</h2>
          <input type="file" className={styles.uploadInput} />
        </div>
        <div className={styles.inputBox}>
          <input
            type="textarea"
            name="description"
            id="title-input"
            value={formData.description}
            placeholder="Description goes here"
            onChange={handleChange}
            className={styles.descriptionInput}
          />
        </div>
        <button type="submit" className={styles.submitButton}>SUBMIT</button>
      </form>
    </main>
  )
}

export default NewOutfit

// // npm modules
// import { useState } from "react"

// // css
// import styles from './NewBlog.module.css'

// const NewBlog = (props) => {
//   const [formData, setFormData ] = useState({
//     title: '',
//     text: '',
//     category: 'News'
//   })

//   const handleChange = (evt) => {
//     setFormData({ ...formData, [evt.target.name]: evt.target.value })
//   }

//   const handleSubmit = (evt) => {
//     evt.preventDefault()
// 		props.handleAddBlog(formData)
//   }

//   return (
//     <main className={styles.container}>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="title-input">Title</label>
//         <input
//           required
//           type="text"
//           name="title"
//           id="title-input"
//           value={formData.title}
//           placeholder="Title"
//           onChange={handleChange}
//         />
//         <label htmlFor="text-input">Text</label>
//         <textarea
//           required
//           type="text"
//           name="text"
//           id="text-input"
//           value={formData.text}
//           placeholder="Text"
//           onChange={handleChange}
//         />
//         <label htmlFor="category-input">Category</label>
//         <select
//           required
//           name="category"
//           id="category-input"
//           value={formData.category}
//           onChange={handleChange}
//         >
//           <option value="News">News</option>
//           <option value="Games">Games</option>
//           <option value="Music">Music</option>
//           <option value="Movies">Movies</option>
//           <option value="Sports">Sports</option>
//           <option value="Television">Television</option>
//         </select>
//         <button type="submit">SUBMIT</button>
//       </form>
//     </main>
//   )
// }
 
// export default NewBlog
