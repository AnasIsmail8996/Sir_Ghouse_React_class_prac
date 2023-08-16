import {memo} from "react";

function Child({getData}){
console.log('child hai');
console.log(getData());
    return(
<div>

<h1>
    Child Components
</h1>

</div>

    )

}

export default memo(Child);