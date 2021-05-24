interface iAproved {
  label: string
};
interface iRefused {
  label: string
};
interface iWaiting {
  label: string
};

interface iBar {
  date: string,
  aproved: {
    [key: string]: iAproved
  },
  refused: {
    [key: string]: iRefused
  }
  waiting: {
    [key: string]: iWaiting
  }
}
export default iBar