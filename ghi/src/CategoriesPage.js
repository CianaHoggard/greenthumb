import { useToken, getTokenInternal } from './Token'
import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import './CategoryPage.css'
import Loader from './Loader'
import Footer from './Footer'
import PropTypes from 'prop-types'

function ModelColumn (props) {
  const foliagePlantACL = (name) => {
    if (name === 'Foliage plant') {
      return (name = 'Foliage')
    } else {
      return (name)
    }
  }

  return (
        <div className="col">
            {props.column.map(categoryName => {
              const category = foliagePlantACL(categoryName)
              return (
                    <Link key={category} to={`/categories/${category}`} className='category-link'>
                        <h6 className="category-title" style={{ paddingTop: 5 }}>🌱 {category}</h6>
                    </Link>
              )
            })}
        </div>
  )
}

ModelColumn.propTypes = {
  column: PropTypes.array.isRequired
}

function CategoriesPage () {
  const [categories, setCategories] = useState([[], []])
  const { token } = useToken()
  const navigate = useNavigate()
  const [loading, setIsLoading] = useState(true)

  const getCategories = async () => {
    const url = `${process.env.REACT_APP_ACCOUNTS_HOST}/api/plants/categories/`
    try {
      const response = await fetch(url, {
        method: 'get',
        headers: {
          Authentication: `Bearer ${token}`
        },
        credentials: 'include'
      })
      if (response.ok) {
        const data = await response.json()
        const requests = []
        for (const category of data) {
          requests.push(category.Category)
        }
        requests.sort()
        requests.splice(14, 1)
        const columns = [[], []]
        for (let i = 0; i < 11; i++) {
          columns[0].push(requests[i])
        }
        for (let i = 11; i < 20; i++) {
          columns[1].push(requests[i])
        }
        columns[1].push('Other')
        setCategories(columns)
        setIsLoading(false)
      }
    } catch (error) {
    }
  }

  const isLoggedIn = async () => {
    const token = await getTokenInternal()
    if (!token) {
      setTimeout(() => {
        navigate('/login')
      }, 0)
    }
  }

  useEffect(() => {
    getCategories()
    isLoggedIn()
  }, [])

  return (
        <>
            {loading
              ? (
                <Loader />
                )
              : (
                <>
                    <div className="container-fluid" style={{ paddingTop: 20, marginBottom: -370 }}>
                        <h2 className="name" style={{ paddingTop: 20 }}>Plant Categories</h2>
                        <div className="container-fluid" id="categories-box" >
                            <img src="/gardener1.png"
                                alt="Gardener 1"
                                style={{ maxWidth: '25%', height: '10%', paddingTop: 330, marginLeft: -70 }} />
                            <div className="row" id="categories-row" style={{ paddingTop: 20 }}>
                                {categories.map((category) => {
                                  return (
                                        <ModelColumn key={categories.indexOf(category)} column={category} />
                                  )
                                })}
                            </div>
                            <img src="/gardener2.png"
                                alt="Gardener 2"
                                style={{ maxWidth: '30%', height: '10%', marginTop: -40, marginRight: -90 }} />
                        </div>
                    </div>
                    <Footer />
                </>
                )}
        </>
  )
}

export default CategoriesPage
