import {Link, useNavigate} from "react-router-dom";
import ilustrationImage from "../assets/undraw_form.svg";
import {MdCloudDone} from "react-icons/md";
import Input from "../components/Input";
import { useForm } from "react-hook-form";

function FormPage() {
  const { register, handleSubmit } = useForm();
  const Navigate = useNavigate();
  
  const onSubmit = (data) => {
    const existingData = JSON.parse(localStorage.getItem("form")) || [];
    
    localStorage.setItem("form", JSON.stringify([...existingData, data]));
    Navigate("/result");
  };


  return (
    <main className="flex justify-center my-10">
      <section className="flex flex-col items-center w-1/2">
        {/* Judul Form */}
        <TitleCard />
        {/* Description */}
        <DescriptionCard />
        {/* Question card */}
        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
          <Input
            {...register("id")}
            type={"text"}
            label={"ID"}
            required={true}
            placeholder={"Jawaban Kamu"}
            desc={
              "Silakan masukkan ID Talent di sini. Jika ada yang lupa, jangan ragu untuk bertanya kepada Talent Success."
            }
          />
          <Input
            {...register("name")}
            type={"text"}
            label={"Name"}
            required={true}
            placeholder={"Jawaban Kamu"}
          />
          <Input
            name={"location"}
            register={register}
            type={"radio"}
            label={"Location"}
            values={["Offline", "Online"]}
            required={true}
          />
          <Input 
            name={"feedback"}
            register={register}
            type={"checkbox"}
            label={"Feedback"}
            values={[
              "Sangat Puas",
              "Puas",
              "Biasa",
              "Tidak Puas",
              "Sangat Tidak Puas",
            ]}
            required={true}
          />
        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded w-full my-5 cursor-pointer transition ease-in-out duration-300" type="submit">Submit</button>
        </form>
      <Link
        to={"/result"}
        className="text-blue-500 hover:underline hover:underline-offset-4"
      >
        Result
      </Link>
      </section>

    </main>
  );
}

function TitleCard() {
  return (
    <div className="border border-green-400 shadow-md p-5 rounded">
      <h1 className="text-4xl font-bold">Form Feedback Materi & Tugas</h1>
      <img src={ilustrationImage} alt="image" className="mt-5" />
    </div>
  );
}

function DescriptionCard() {
  return (
    <div className="border border-green-400 shadow-md mt-4 p-5 rounded w-full border-t-8 ">
      <h2 className="text-2xl font-semibold mb-3">
        Feedback Form: Bootcamp Class Fazztrack
      </h2>
      <p className="text-gray-500">{`
        Halo, Talent!
        Terima kasih telah mengikuti Bootcamp di Fazztrack! Silakan isi feedback di sini untuk membantu kami mengevaluasi dan meningkatkan kualitas Bootcamp.

        Terima kasih!😊
      `}</p>
      <div className="border-t-2 border-b-2 border-gray-300 my-3 py-3">
        <div className="flex justify-between">
          <span className="flex gap-2">
            <p className="font-semibold text-gray-600">
              namasayadenis@gmail.com
            </p>
            <Link to={"#"} className="text-blue-500 ">
              Ganti Akun
            </Link>
          </span>
          <Link to={"#"} className="text-xl">
            <MdCloudDone />
          </Link>
        </div>
      </div>
      <p className="text-sm text-red-400">
        * Menunjukkan pertanyaan yang wajib diisi
      </p>
    </div>
  );
}

export default FormPage;
