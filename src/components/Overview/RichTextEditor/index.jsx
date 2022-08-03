import { Editor } from '@tinymce/tinymce-react';

// TinyMCE so the global var exists
// eslint-disable-next-line no-unused-vars
import tinymce from 'tinymce/tinymce';
// DOM model
import 'tinymce/models/dom/model'
// Theme
import 'tinymce/themes/silver';
// Toolbar icons
import 'tinymce/icons/default';
// Editor styles
import 'tinymce/skins/ui/oxide/skin.min.css';

// importing the plugin js.
// if you use a plugin that is not listed here the editor will fail to load
import 'tinymce/plugins/advlist';
import 'tinymce/plugins/anchor';
import 'tinymce/plugins/autolink';
import 'tinymce/plugins/autoresize';
import 'tinymce/plugins/autosave';
import 'tinymce/plugins/charmap';
import 'tinymce/plugins/code';
import 'tinymce/plugins/codesample';
import 'tinymce/plugins/directionality';
import 'tinymce/plugins/emoticons';
import 'tinymce/plugins/fullscreen';
import 'tinymce/plugins/help';
import 'tinymce/plugins/image';
import 'tinymce/plugins/importcss';
import 'tinymce/plugins/insertdatetime';
import 'tinymce/plugins/link';
import 'tinymce/plugins/lists';
import 'tinymce/plugins/media';
import 'tinymce/plugins/nonbreaking';
import 'tinymce/plugins/pagebreak';
import 'tinymce/plugins/preview';
import 'tinymce/plugins/quickbars';
import 'tinymce/plugins/save';
import 'tinymce/plugins/searchreplace';
import 'tinymce/plugins/table';
import 'tinymce/plugins/template';
import 'tinymce/plugins/visualblocks';
import 'tinymce/plugins/visualchars';
import 'tinymce/plugins/wordcount';

// importing plugin resources
import 'tinymce/plugins/emoticons/js/emojis';
import {useRef} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import  {faFloppyDisk} from "@fortawesome/free-solid-svg-icons/faFloppyDisk";

export default function RichTextEditor(props) {
    const {init, ...rest} = props;
    // note that skin and content_css is disabled to avoid the normal
    // loading process and is instead loaded as a string via content_style
    const editorRef = useRef(null);
    const log = (e) => {
        e.preventDefault();
        if (editorRef.current) {
            console.log(editorRef.current.getContent());
        }
    };
    return (
        <form action="" onSubmit={log} className="bg-white w-3/6 mx-auto">
            <Editor
                {...rest}
                onInit={(evt, editor) => editorRef.current = editor}
                initialValue='<p>Take a note.....</p>'
                init={{
                    height: 150,
                    menubar: false,
                    plugins: [
                        'advlist', 'anchor', 'autolink', 'help', 'image', 'link', 'lists',
                        'searchreplace', 'table', 'wordcount'
                    ],
                    toolbar: 'undo redo | blocks | ' +
                        'bold italic forecolor | alignleft aligncenter ' +
                        'alignright alignjustify | bullist numlist outdent indent | ' +
                        'removeformat | help',
                    content_style: 'body { font-family: Lato,sans-serif; font-size:14px }'
                }}
            />

            <button type="submit" className="block text-white font-bold py-1 relative mx-auto -mt-3 z-30 bg-primary w-1/3 rounded-2xl cursor-pointer">
                Save&nbsp;<FontAwesomeIcon icon={faFloppyDisk} size={'1x'} className="text-white" />
            </button>
        </form>
    );
}