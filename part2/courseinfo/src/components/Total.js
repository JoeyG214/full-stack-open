const Total = ({parts}) => {
  
  let exercisesArr = parts.map(part => part.exercises)
  let totalExercises = exercisesArr.reduce(
    (prev, curr) => prev + curr, 0);

  return (
    <p>
      Number of exercises {totalExercises}
    </p>
  )
}
  
export default Total