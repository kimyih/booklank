import React from 'react';
import Modal from 'react-modal';

const BookModal = ({ isOpen, onRequestClose, book }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Book Details"
            shouldCloseOnOverlayClick={true} // 모달 창 밖을 클릭하면 닫히도록 설정
            overlayClassName="ReactModal__Overlay"
            className="ReactModal__Content"
        >
            {book && (
                <div className="modal-content">
                    <h2>책 정보</h2>
                    <div className="modal-body">
                        <div className="modal-image">
                            <img src={book.imageURL} alt={book.title} />
                        </div>
                        <div className="modal-details">
                            <h3>{book.title}</h3>
                            <p>저자: {book.author}</p>
                            <p className="modal-price">
                                <span className="original-price">{book.originalPrice}</span>
                                <span className="discounted-price">가격: {book.price}</span>
                            </p>
                            <p>.</p>
                            <button className="buy-button">구매하러가기</button>
                        </div>
                    </div>
                </div>
            )}
        </Modal>
    );
};

export default BookModal;
