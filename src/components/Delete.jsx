import { useState } from "react";
import Button from "./Button";

export default function Delete(){
    const [deleteClicked, setDeleteClicked] = useState(false);

    return (
        <div>
            {deleteClicked &&
        
            <div data-testid="alert" id="alert">
                <h2>Are you sure?</h2>
                <p>These changes can't be reverted!</p>
                <button onClick={() => setDeleteClicked(false)}>Proceed</button>
            </div>
            }
            <Button functionForClick={()=>setDeleteClicked(true)}>Delete</Button>
        </div>    
      );
}