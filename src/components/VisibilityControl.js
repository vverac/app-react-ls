import React from 'react'


const VisibilityControl = ({ setShowCompleted, cleanTasks, isChecked }) => {

  const handleDdelete = () => {
    if (window.confirm('Are you sureypu want to delete it?')) {
      cleanTasks()
    }
  }

  return (
    <div>
      <input
        type='checkbox'
        onChange={e => setShowCompleted(e.target.checked)}
        checked={isChecked} /> <label>Show task Done</label>

      <button
        onClick={handleDdelete}
      >
        Clear
      </button>
    </div>
  )
}

export default VisibilityControl