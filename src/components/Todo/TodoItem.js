import styled from "styled-components";
import {MEDIA_QUERY_MD, MEDIA_QUERY_LG} from "./constants/breakpoint";
import PropTypes from 'prop-types'
const TodoItemWrapper = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  border: 1px solid black;
  & + & {
    margin-top: 12px;
  }
`;

const TodoContent = styled.div `
  color: ${
    (props) => props.theme.colors.secondary[300]
};
  font-size: 12px;
  ${
    (props) => props.size === "XL" && `
    font-size: 20px;
  `
}
  ${
    (props) => props.$isDone && `
  text-decoration: line-through;`
}
`;

const TodoButtonWrapper = styled.div ``;

const Button = styled.button `
  padding: 4px;
  color: black;
  font-size: 20px;

  ${MEDIA_QUERY_MD} {
    font-size: 16px;
  }

  ${MEDIA_QUERY_LG} {
    font-size: 12px;
  }
  &:hover {
    color: ${
    (props) => props.theme.colors.secondary[400]
};
  }
  & + & {
    margin-left: 4px;
  }
`;

const RedButton = styled(Button)`
  color: ${
    (props) => props.theme.colors.secondary[500]
};
`;

export default function TodoItem({
    className,
    todo,
    size,
    handleToggleIsDone,
    handleDeleteTodo
}) {
    const handleTogglerClick = () => {
        handleToggleIsDone(todo.id);
    };

    const handleDeleteClick = () => {
        handleDeleteTodo(todo.id);
    };
    return (
        <TodoItemWrapper className={className}>
            <TodoContent $isDone={
                    todo.isDone
                }
                size={size}>
                {
                todo.content
            } </TodoContent>
            <TodoButtonWrapper>
                <Button onClick={handleTogglerClick}>
                    {
                    todo.isDone ? "已完成" : "未完成"
                } </Button>
                <RedButton onClick={handleDeleteClick}>刪除</RedButton>
            </TodoButtonWrapper>
        </TodoItemWrapper>
    );
}

TodoItem.propTypes = {
    className: PropTypes.string,
    todo: PropTypes.shape(
        {id: PropTypes.number.isRequired, content: PropTypes.string, isDone: PropTypes.bool}
    ),
    size: PropTypes.string,
    handleToggleIsDone: PropTypes.func.isRequired,
    handleDeleteTodo: PropTypes.func.isRequired
}
