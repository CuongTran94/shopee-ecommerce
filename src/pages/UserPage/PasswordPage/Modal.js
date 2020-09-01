import { Modal } from 'antd';

export function handleError(error) {
  Modal.error({
    title: 'Thay đổi mật khẩu thất bại',
    content: error
  });
}

export function handleSuccess(action) {
  Modal.success({
    content: 'Thay đổi mật khẩu thành công',
    onOk: action
  });
}
