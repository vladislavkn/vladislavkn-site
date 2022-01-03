const joinClasses = (...classes: (string | boolean)[]) =>
  classes.filter(Boolean).join(' ')

export default joinClasses
