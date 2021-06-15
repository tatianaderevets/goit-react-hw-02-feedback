import React from "react";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';


const FeedbackOptions = ({onChangeStats}) => {
    return (
        <ButtonGroup
            color="primary"
            aria-label="outlined primary button group">
  <Button name="good" onClick={(e) => onChangeStats(e.currentTarget.name)}>good</Button>
  <Button name="neutral" onClick={(e) => onChangeStats(e.currentTarget.name)}>neutral</Button>
  <Button name="bad" onClick={(e) => onChangeStats(e.currentTarget.name)}>bad</Button>
</ButtonGroup>
    );
};

export default FeedbackOptions;