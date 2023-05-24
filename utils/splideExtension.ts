import { Options, Splide as SplideType, Components } from '@splidejs/splide';

export function MyExtension( Splide: SplideType, Components: Components ) {
    /**
     * Optional. Called when the component is mounted.
     */
    function mount() {
      Splide.on( 'move', onMove );
      onMove(Splide?.index);
    }
    
    function onMove (newIndex: number) {
        const currentSlide = Components?.Slides?.getAt(newIndex)?.slide?.dataset?.class;
        Splide.root.dataset.currentSlide = currentSlide || "empty";
    }
    /**
     * Optional. Called when the Splide destroys the carousel.
     */
    function destroy() {
      console.log( 'Bye!' );
    }
  
    return {
      mount,
      destroy,
    };
  }