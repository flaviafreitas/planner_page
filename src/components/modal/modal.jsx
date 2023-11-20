import './index.scss'

export default function Modal({ isOpen, isClose, titulo, descricao } ) {

    if(isOpen){
      return (
        <>
          <div className="modal">
            <div className="modal__content">
              <h1>{titulo}</h1>
              <p>{descricao}</p>
              <div className="modal__content--btn">
                <button onClick={() => isClose()} className='btn_blue'>não</button>
                <button disabled onClick={() => isClose()} className='btn_white'>sim</button>
              </div>
            </div>
          </div>
        </>
      )
    }else{
      return null;
    }
}