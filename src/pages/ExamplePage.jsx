import { useForm } from 'react-hook-form';

function ExamplePage() {
  const { register, handleSubmit, watch } = useForm();
  
  const onSubmit = (data) => {
    console.log(data);
  };

  // Untuk melihat nilai yang dipilih secara real-time
  const selectedOption = watch("gender");

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3>Pilih Jenis Kelamin:</h3>
      
      <label>
        <input 
          type="radio" 
          value="male" 
          {...register("gender", { required: true })} 
        />
        Laki-laki
      </label>
      
      <label>
        <input 
          type="radio" 
          value="female" 
          {...register("gender")} 
        />
        Perempuan
      </label>
      
      <label>
        <input 
          type="radio" 
          value="other" 
          {...register("gender")} 
        />
        Lainnya
      </label>
      
      <p>Selected: {selectedOption}</p>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ExamplePage;