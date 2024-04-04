import { Table } from "src/components/reusable/Table";
import { useQuery, useMutation } from "@tanstack/react-query";
import { Button, Avatar, Tooltip, Form, Input } from "antd";
import {
  addComment,
  deleteComment,
  getComment,
  updateComment,
} from "src/service/helpers/actions";
import { IMAGE_LINK } from "src/service/helpers/constants";
import { queryClient } from "src/main";
import { PenTool, Trash2 } from "react-feather";
import { Drawer } from "src/components/Drawer";
import { fileReader } from "src/service/helpers/usefulFns";
import { useState } from "react";

const Comment = () => {
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState(null);
  const [preview, setPreview] = useState(null);
  const [open, setOpen] = useState(false);
  const [record, setRecord] = useState(null);
  const { data, isPending } = useQuery({
    queryKey: ["comment"],
    queryFn: getComment,
    refetchOnWindowFocus: false,
  });
  const deleteData = useMutation({ mutationFn: (id) => deleteComment(id) });

  // handleDelete
  const handleDelete = async (value) => {
    deleteData.mutate(value.id);
    queryClient.invalidateQueries({ queryKey: ["comment"] });
  };

  // handleUpdate
  const handleUpdate = async (values) => {
    const body = new FormData();
    body.append("camment", values.comment);
    body.append("image", fileList);
    const res = await updateComment(record.id, body);
    queryClient.invalidateQueries({ queryKey: ["comment"] });
    closeDrawer();
    console.log(res, "res");
  };

  // handleCreate
  const handleCreate = async (values) => {
    const body = new FormData();
    body.append("camment", values.comment);
    body.append("image", fileList);
    const res = await addComment(body);
    queryClient.invalidateQueries({ queryKey: ["comment"] });
    closeDrawer();
    console.log(res, "res");
  };

  // handleChange
  const handleChange = async (e) => {
    const preview = await fileReader(e.target.files[0]);
    setFileList(e.target.files[0]);
    setPreview(preview);
  };

  // close Drawer
  const closeDrawer = () => {
    setFileList(null);
    setPreview(null);
    setOpen(false);
    setRecord(null);
    form.resetFields();
  };

  const column = [
    {
      title: "Фото",
      dataIndex: "image_link",
      key: "image_link",
      render: (t) => {
        return (
          <Avatar
            src={IMAGE_LINK + "" + t}
            size={80}
            shape="square"
            style={{ boxShadow: "0 0 10px 1px lightgrey" }}
          />
        );
      },
    },
    {
      title: "Дата создания",
      dataIndex: "create_data",
      key: "create_data",
      flex: 1,
      align: "center",
    },
    {
      title: "Комментария",
      dataIndex: "camment",
      key: "camment",
      flex: 1,
      align: "center",
    },
    {
      title: "Дейтсвия",
      dataIndex: "action",
      key: "action",
      flex: 1,
      align: "center",
      render: (t, record) => {
        return (
          <div className="d-flex align-center justify-center gap-x-1">
            <Tooltip title="Изменить" placement="top">
              <PenTool
                cursor={"pointer"}
                size={20}
                color="#252525"
                onClick={() => {
                  setOpen(true);
                  setRecord(record);
                  form.setFieldValue("comment", record.camment);
                  setFileList(record.image_link);
                  setPreview(IMAGE_LINK + "" + record.image_link);
                }}
              />
            </Tooltip>
            <Tooltip title="Удалить" placement="top">
              <Trash2
                cursor={"pointer"}
                size={20}
                color="#252525"
                onClick={() => handleDelete(record)}
              />
            </Tooltip>
          </div>
        );
      },
    },
  ];

  return (
    <main className="comments">
      <h1>Comments</h1>

      <div className="comments-table m-t-2">
        <div className="w-100 d-flex align-center justify-end">
          <Button
            className="m-y-1"
            type="primary"
            onClick={() => setOpen(true)}
          >
            Создать +
          </Button>
        </div>
        <Table
          loading={isPending}
          column={column}
          row={data?.map((item) => ({ ...item, key: item.id }))}
        />
      </div>
      {/* DRAWER*/}
      <Drawer
        history={{
          record,
          open,
          closeDrawer,
          preview,
          title: "Добавить",
          footer: (
            <div className="d-flex align-center gap-x-2">
              <Button type="primary" form="history-form" htmlType="submit">
                Сохранить
              </Button>
              <Button danger onClick={closeDrawer}>
                Отмена
              </Button>
            </div>
          ),
        }}
      >
        <Form
          typeof="form-data"
          onFinish={record ? handleUpdate : handleCreate}
          form={form}
          id="history-form"
          layout="vertical"
        >
          <Form.Item
            name={"comment"}
            label="Название"
            rules={[{ required: true, message: "", whitespace: true }]}
          >
            <Input.TextArea type="text" />
          </Form.Item>
          <Form.Item
            name={"image"}
            label={
              <p>
                Картинка <span style={{ color: "red" }}>(160 X 80 пикс)</span>
              </p>
            }
          >
            <Input type="file" onChange={handleChange} />
          </Form.Item>
        </Form>
      </Drawer>
    </main>
  );
};

export default Comment;
