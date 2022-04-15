import { React,createElement, useEffect, useState } from 'react'
import {v4 as uuidv4} from 'uuid'
import './Goals.css'
import SharedGoal from '../components/SharedGoal'
import Goal from '../components/Goal'
import Dropdown from 'react-dropdown';
import 'reactjs-popup/dist/index.css';
import Modal from 'react-modal';
import GoalCategory from '../components/GoalCategory'

const Goals = ({categoryList, AddCategory, friendsList, goals_list, posts, AddPost, AddGoal}) => {

  const [goal_text, setGoalText] = useState('');
  const [post_text, setPostText] = useState('');
  const [category_text, setCategoryText] = useState('');
  const [selected_goal, setSelectedGoal] = useState('');
  

  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleNewGoal = (e) => {
    if (goal_text==='') {
      alert('Please describe the goal')
      return
    }
    if (category_text==='') {
      alert('Please choose a category')
      return
    }
    let new_goal = {
      value: goal_text,
      label: goal_text,
      category: category_text,
    }
    AddGoal(new_goal);

    if (!categoryList.includes(category_text)) {
      AddCategory(category_text)
    }

    setGoalText('');
    setCategoryText('')
  } 

  const handlePost = (e) => {
    console.log(selected_goal);
    if (!selected_goal) {
      alert('Please select a goal to post the update for')
    }
    else {
    let new_post = {
      id: uuidv4(),
      user: 'User',
      goal: selected_goal,
      update: post_text,
      date: new Date(),
    }
    AddPost(new_post);
    setPostText('');
    }
  }
  
  return (
    <div className='goals'>
        <div className='goals-left-container'> 
          <div className='new-goal-container'>
            <div className='new-goal'>
              <button className="new-goal-btn" onClick={openModal}>Add New Goal</button>
              <Modal
                  isOpen={modalIsOpen}
                  onAfterOpen={afterOpenModal}
                  onRequestClose={closeModal}
                  // style={customStyles}
                  className='Modal'

                >
                  {/* <button onClick={closeModal}>close</button> */}
                  <div id="modal-container">
                    <h1>Add New Goal</h1>
                    <div id="select">
                      <h3>Choose Goal Category</h3>
                      <input 
                        id="goals-input" 
                        placeholder='Add New Category'
                        onChange={(e) => setCategoryText(e.target.value)}
                      />
                      <p>Or</p>
                      <Dropdown 
                        options={categoryList} 
                        className='dropdown' 
                        placeholder='Choose Existing Category' 
                        value='Choose Existing Category'
                        onChange={(e)=>setCategoryText(e.value)}
                      />
                      <h3>Describe Goal</h3>
                      <textarea 
                          className='goal-description' 
                          placeholder='Goal Description'
                          value={goal_text}
                          onChange={(e)=>setGoalText(e.target.value)}
                          >
                        </textarea>
                    </div>
                    <button className='btn-left' onClick={handleNewGoal}>Post</button>
                  </div>
                </Modal>

      
            </div>
          </div>
          <div className='goals-container'>
            <h2 id="title">Goals</h2>
            <ul>
            <>
            {categoryList.map((category) => (
              <GoalCategory goals_list={goals_list} category={category} friendsList={friendsList}/>
            ))}
            </>
            </ul>
          </div>
        </div>
        <div className='goals-right-container'>
        <h2>Post an update</h2>
          <div className='goals-input'>
            <div className='goals-post-content'>
              <Dropdown 
              options={goals_list} 
              className='update-dropdown' 
              placeholder='Select a goal' 
              value='Select a goal'
              onChange={(e)=>setSelectedGoal(e.value)}
            />
              <textarea 
              className='post-input' 
              placeholder='Post an update'
              value={post_text}
              onChange={(e) => setPostText(e.target.value)}
              ></textarea>
              <button className='post-btn' onClick={handlePost}>Post</button>
            </div>
          </div>
          <div className='feed'>
            
            <>
              {posts.map((post) => (
                <SharedGoal key={post.id} user={post.user} goal={post.goal} update={post.update}/>
              )).sort((a, b) => b.date-a.date).reverse()}
            </>
          </div>
        </div>
    </div>
    
  )
}

export default Goals