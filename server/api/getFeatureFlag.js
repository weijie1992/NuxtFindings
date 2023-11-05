export default defineEventHandler( async(event) => {
    const novemberSecond = new Date('2023-11-04T00:00:00');
    const dateToCheck = new Date();
    if (dateToCheck > novemberSecond) {
        return true
      } else {
        return false
      }
})
