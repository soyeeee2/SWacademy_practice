import PropTypes from 'prop-types';

const Board = ({ articles }) => {

    return(
        <>
            <h1>Board</h1>

            <ul>
                <li>
                    {articles.map(data => (
                        <li key={data.id}>
                            {data.id} | {data.title} | {data.author}
                        </li>
                    ))}
                </li>
            </ul>
        </>
    )
}

Board.propTypes = {
    articles: PropTypes.array
}

export default Board;