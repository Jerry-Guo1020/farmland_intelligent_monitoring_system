import React from "react";
import { Box } from "lucide-react";

const page = () => {
  return (
    <div className="bg-green-200 items-center h-210 ">
      <p className=" py-10 text-5xl font-mono text-center font-bold ">我们有哈哈哈功能</p>
      <div className="text-center text-xl font-sans">为您制造更好的使用环境，构建一个全面的农业智能监测与农业技术建议的系统</div>

      <div className="flex px-30  py-10 gap-24">
        <div className="bg-blue-200 flex h-50 w-100 rounded-xl items-center transition delay-10 duration-300 ease-in-out hover:-translate-y-1  ">
          <div className="px-5">
            <Box />
          </div>
          <div className="info">
            <p className="text-orange-400 text-3xl font-sans">环境数据监测</p>
            <p className="py-2 ">集成土壤湿度、温度、光照等传感器，<br></br>实时采集农田环境数据。<br></br>数据将通过无线方式上传至系统，<br></br>供后续分析与决策使用。</p>
          </div>
        </div>

        <div className="bg-blue-200 flex h-50 w-100 rounded-xl items-center transition delay-10 duration-300 ease-in-out hover:-translate-y-1  ">
          <div className="px-5">
            <Box />
          </div>
          <div className="info">
            <p className="text-orange-400 text-3xl  ">智慧农业决策</p>
            <p className="py-2">系统将根据 AI 模型分析结果，<br></br>自动生成智能灌溉与施肥建议。<br></br>用户可通过系统查看推荐的灌溉时间、<br></br>施肥量等，减少人工干预和资源浪费。</p>
          </div>
        </div>

        <div className="bg-blue-200 flex h-50 w-100 rounded-xl items-center transition delay-10 duration-300 ease-in-out hover:-translate-y-1  ">
          <div className="px-5">
            <Box />
          </div>
          <div className="info">
            <p className="text-orange-400 text-3xl ">智慧农业管理</p>
            <p className="py-2">通过大屏显示和交互界面，<br></br>直观展示农田环境数据与 AI 分析结果，<br></br>帮助农业工作者作出高效管理。</p>
          </div>
        </div>
      </div>

      <div className="flex px-30  py-10 gap-24">
      <div className="bg-blue-200 flex h-50 w-100 rounded-xl items-center transition delay-10 duration-300 ease-in-out hover:-translate-y-1  ">
      <div className="px-5">
            <Box />
          </div>
          <div className="info">
            <p className="text-orange-400 text-3xl ">智慧农业服务</p>
            <p className="py-2">我们拥有这个功能，然后实现环境检测</p>{" "}
          </div>
        </div>

        <div className="bg-blue-200 flex h-50 w-100 rounded-xl items-center transition delay-10 duration-300 ease-in-out hover:-translate-y-1  ">
          <div className="px-5">
            <Box />
          </div>
          <div className="info">
            <p className="text-orange-400 text-3xl ">社区分享中心</p>
            <p className="py-2">我们拥有这个功能，然后实现环境检测</p>{" "}
          </div>
        </div>

        <div className="bg-blue-200 flex h-50 w-100 rounded-xl items-center transition delay-10 duration-300 ease-in-out hover:-translate-y-1  ">
          <div className="px-5">
            <Box />
          </div>
          <div className="info">
            <p className="text-orange-400 text-3xl ">个人专享中心</p>
            <p className="py-2">我们拥有这个功能，然后实现环境检测</p>{" "}
          </div>
          </div>
      </div>
    </div>
  );
};

export default page;
