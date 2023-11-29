const eventBus = {
  on(event: any, callback: any) {
    // lisens vor an event
    document.addEventListener(event, (e) => callback(e.detail));
  },

  dispatch(event: any, data: any) {
    // start an event
    document.dispatchEvent(new CustomEvent(event, { detail: data }));
  },

  remove(event: any, callback: any) {
    document.removeEventListener(event, callback);
  },
};
export default eventBus;
