import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(3, { message: "Subject must be at least 3 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    setIsSubmitting(true);
    console.log(data);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      form.reset();
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-primary" />,
      title: "Email",
      value: "diwakar4311@gmail.com",
      link: "mailto:diwakar4311@gmail.com",
    },
    {
      icon: <FaPhone className="text-primary" />,
      title: "Phone",
      value: "+91 6307197639",
      link: "tel:+916307197639",
    },
    {
      icon: <FaLinkedin className="text-primary" />,
      title: "LinkedIn",
      value: "linkedin.com/in/diwakar7sharma",
      link: "https://www.linkedin.com/in/diwakar7sharma/",
    },
    {
      icon: <FaGithub className="text-primary" />,
      title: "GitHub",
      value: "github.com/diwakar7sharma",
      link: "https://github.com/diwakar7sharma",
    },
  ];

  return (
    <section id="contact" className="py-16 bg-white section-transition">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 relative">
          <span className="bg-primary h-1 w-20 absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-4"></span>
          Contact Me
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-6 text-primary">Get In Touch</h3>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="mt-1">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{info.title}</h4>
                      <a 
                        href={info.link} 
                        target={info.title === "LinkedIn" || info.title === "GitHub" ? "_blank" : undefined}
                        rel={info.title === "LinkedIn" || info.title === "GitHub" ? "noopener noreferrer" : undefined}
                        className="text-gray-600 hover:text-primary"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="animate-fade-in-up">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-6 text-primary">Send Me a Message</h3>
                
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="mb-4">
                      <FormLabel htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</FormLabel>
                      <FormControl>
                        <Input 
                          id="name" 
                          placeholder="Your Name" 
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="mb-4">
                      <FormLabel htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</FormLabel>
                      <FormControl>
                        <Input 
                          id="email" 
                          placeholder="Your Email" 
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem className="mb-4">
                      <FormLabel htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</FormLabel>
                      <FormControl>
                        <Input 
                          id="subject" 
                          placeholder="Message Subject" 
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="mb-6">
                      <FormLabel htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          id="message" 
                          rows={4} 
                          placeholder="Your Message" 
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-md font-medium transition-colors"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
