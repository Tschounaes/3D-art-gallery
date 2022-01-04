import create from 'zustand';

const use3dStore = create( (set) => {
    return ({
        // SELECT IMAGE IN GALLERY
        selectImage: '',
        setSelectImage: (selectImage) => set( {selectImage} ),

        // IMAGE SPREADSHEET
        imageSpreadsheet: [],
        setImageSpreadsheet: (imageSpreadsheet) => set( {imageSpreadsheet} ),

        // KEYPRESS
        //keyCode: '',
        //setKeyCode: ((keyCode) => set( {keyCode})),
    })
});

export default use3dStore;