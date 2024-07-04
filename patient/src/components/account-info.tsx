import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import { DataTable } from "./data-table";
import axios from "axios";
import { addressCols } from "@/columns/addressCols";
import { useEffect, useState } from "react";
import MultipleSelector, { Option } from '@/components/ui/multiple-selector';
const AccountInfo = () => {
  const [data, setData] = useState<any>();
  const url: any = window.location.href;
  const fetchData = async () => {
    try {
      let headers: any = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'work-space': '',
      };
      const subdomain = url.match(/\/\/([^\.]+)\./)[1];

      const data = await axios.get(`http://${subdomain}.localhost:8000/portals/patient/1/address/`, {
        headers: headers
      });
      setData(data.data.results);
    } catch (err) {
      console.log("error =", err);
    } finally {

    }
  };

  console.log("data -", data);
  useEffect(() => {
    fetchData();
  }, []);
  const OPTIONS: Option[] = [
    { label: 'To:', value: 'To_data' },
    { label: 'From:', value: 'From_data' },
    { label: 'Subject:', value: 'Subject' },
    { label: 'Physician:', value: 'Physician_name' },
  ];
  return (
    <div className="flex-col align-start p-8 pt-6">
      {/* Basic Details */}
      <div className='flex flex-col gap-2 mb-4'>
        <h2 className="text-2xl font-bold tracking-tight">Basic Details</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 max-w-screen-md">

          <div className="w-full max-w-sm items-center">
            <Label htmlFor="patient-name">Patient Name</Label>
            <Input disabled type="text" id="patient-name" placeholder="Patient Name" />
          </div>

          <div className="w-full max-w-sm items-center">
            <Label htmlFor="mrn">Mrn</Label>
            <Input type="text" id="mrn" placeholder="Mrn" />
          </div>

          <div className="flex flex-col gap-2 mt-6">
            <Label className="space-y-2">Gender</Label>
            <RadioGroup disabled className="flex" defaultValue="comfortable">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="M" id="male" />
                <Label className="font-normal" htmlFor="male">Male</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="F" id="female" />
                <Label className="font-normal" htmlFor="female">Female</Label>
              </div>
            </RadioGroup>
          </div>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2 max-w-screen-lg">
          <div className="w-full max-w-sm items-center">
            <Label htmlFor="dob">Dob</Label>
            <Input disabled type="text" id="dob" placeholder="Dob" />
            {/* Age: {`${45}`} */}
          </div>

          <div className="w-full max-w-sm items-center">
            <Label htmlFor="blood-group">Blood Group</Label>
            <Input disabled type="text" id="blood-group" placeholder="Blood Group" />
          </div>

          <div className="w-full max-w-sm items-center">
            <Label htmlFor="weight">Weight(lbs)</Label>
            <Input disabled type="number" id="weight" placeholder="Weight" />
          </div>

          <div className="w-full max-w-sm items-center">
            <Label htmlFor="height">Height</Label>
            <Input disabled type="text" id="height" placeholder="Height(In)" />
          </div>
        </div>
      </div>

      <Separator className="mt-6 mb-4" />

      {/* Personal Contact */}
      <div className='flex flex-col gap-2'>
        <h2 className="text-2xl font-bold tracking-tight">Personal Contact</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2 max-w-screen-content">

          <div className="w-full max-w-sm items-center">
            <Label htmlFor="email">Email</Label>
            <Input disabled type="text" id="email" placeholder="Email" />
          </div>

          <div className="w-full max-w-sm items-center">
            <Label htmlFor="mobile-phone-number">Mobile Phone</Label>
            <Input disabled type="text" id="mobile-phone-number" placeholder="Mobile Phone" />
          </div>

          <div className="w-full max-w-sm items-center">
            <Label htmlFor="home-phone-number">Home Phone</Label>
            <Input disabled type="text" id="home-phone-number" placeholder="Home Phone" />
          </div>

          <div className="w-full max-w-sm items-center">
            <Label htmlFor="office-phone-number">Office Phone</Label>
            <Input disabled type="text" id="office-phone-number" placeholder="Office Phone" />
          </div>

          <div className="w-full max-w-sm items-center">
            <Label htmlFor="office-extension-number">Office Phone Extension</Label>
            <Input disabled type="text" id="office-extension-number" placeholder="Office Phone Extension" />
          </div>

          <div className="w-full max-w-sm items-center">
            <Label htmlFor="timezone">Timezone</Label>
            <Input disabled type="text" id="timezone" placeholder="Timezone" />
          </div>

          <div className="flex mt-6 lg:col-span-3 gap-6">
            <div className="flex flex-col gap-2 justify-between">
              <Label className="space-y-2">Contact Preference</Label>
              <div></div>
              <RadioGroup disabled className="flex" defaultValue="comfortable">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="home_phone" id="home-phone" />
                  <Label className="font-normal" htmlFor="home-phone">Home Phone</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="mobile_phone" id="mobile-phone" />
                  <Label className="font-normal" htmlFor="mobile-phone">Mobile Phone</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="office_phone" id="office-phone" />
                  <Label className="font-normal" htmlFor="office-phone">Office Phone</Label>
                </div>
              </RadioGroup>
            </div>
            <div className="flex items-end gap-6">
              <div className="flex items-center space-x-2">
                <Checkbox id="email" disabled />
                <Label className="font-normal" htmlFor="email">Email</Label>
              </div>
              <div className="flex items-center space-x-2 justify-self-end">
                <Switch disabled id="opt-in" />
                <Label htmlFor="opt-in">Opt-In</Label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator className="mt-6 mb-4" />

      {/* Address */}
      <div className='flex flex-col gap-2'>
        <h2 className="text-2xl font-bold tracking-tight">Address</h2>
        <div className="w-full px-10">
          <MultipleSelector
            defaultOptions={OPTIONS}
            placeholder="Search ...."
            emptyIndicator={
              <p className="text-center text-lg leading-10 text-gray-600 dark:text-gray-400">
                no results found.
              </p>
            }
          />
        </div>
        {data && <DataTable data={data} columns={addressCols} />}
      </div>
    </div>
  );
};

export default AccountInfo;