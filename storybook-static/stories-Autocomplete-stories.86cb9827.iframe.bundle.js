"use strict";(self.webpackChunkmui_rhf_library=self.webpackChunkmui_rhf_library||[]).push([[672],{"./src/stories/Autocomplete.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Autocomplete:()=>Autocomplete,AutocompleteMultiple:()=>AutocompleteMultiple,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _components_InputController_AutocompleteController_AutocompleteController__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/InputController/AutocompleteController/AutocompleteController.tsx"),react_hook_form__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs"),_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@hookform/resolvers/yup/dist/yup.mjs"),yup__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/yup/es/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Autocomplete Controller",component:_components_InputController_AutocompleteController_AutocompleteController__WEBPACK_IMPORTED_MODULE_1__.d,argTypes:{children:{control:{type:"text"}}},parameters:{controls:{expanded:!0}}},Template=args=>{const schema=yup__WEBPACK_IMPORTED_MODULE_2__.Ry().shape({autocomplete:args.multiple?yup__WEBPACK_IMPORTED_MODULE_2__.IX().of(yup__WEBPACK_IMPORTED_MODULE_2__.Z_()).min(2).required():yup__WEBPACK_IMPORTED_MODULE_2__.Z_()}),{handleSubmit,control}=(0,react_hook_form__WEBPACK_IMPORTED_MODULE_4__.cI)({resolver:(0,_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_5__.X)(schema)});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("form",{onSubmit:handleSubmit((data=>{console.log({data})})),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_InputController_AutocompleteController_AutocompleteController__WEBPACK_IMPORTED_MODULE_1__.d,{...args,name:"autocomplete",control}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{type:"submit",children:"Submit"})]})};Template.displayName="Template";const Autocomplete=Template.bind({});Autocomplete.args={name:"autocomplete",textFieldProps:{label:"Autocomplete Controller",fullWidth:!0,variant:"outlined"},optionLabel:"entity.id",optionValue:"entity.id",options:[{title:"Option One",entity:{id:"entity-one"},value:"option-one"},{title:"Option two",entity:{id:"entity-two"},value:"option-two"}]};const AutocompleteMultiple=Template.bind({});AutocompleteMultiple.args={name:"autocompleteMultiple",textFieldProps:{label:"Autocomplete Multiple Controller",fullWidth:!0},defaultValue:[],optionLabel:"title",optionValue:"entity.id",options:[{title:"Option One",entity:{id:"entity-one"},value:"option-one"},{title:"Option Two",entity:{id:"entity-two"},value:"option-two"}],multiple:!0},Autocomplete.parameters={...Autocomplete.parameters,docs:{...Autocomplete.parameters?.docs,source:{originalSource:'args => {\n  const schema = yup.object().shape({\n    autocomplete: args.multiple ? yup.array().of(yup.string()).min(2).required() : yup.string()\n  });\n  const {\n    handleSubmit,\n    control\n  } = useForm({\n    resolver: yupResolver(schema)\n  });\n  const handleFormSubmit = (data: any) => {\n    console.log({\n      data\n    });\n  };\n  return <form onSubmit={handleSubmit(handleFormSubmit)}>\n            <AutocompleteController {...args} name="autocomplete" control={control} />\n            <button type="submit">Submit</button>\n        </form>;\n}',...Autocomplete.parameters?.docs?.source}}},AutocompleteMultiple.parameters={...AutocompleteMultiple.parameters,docs:{...AutocompleteMultiple.parameters?.docs,source:{originalSource:'args => {\n  const schema = yup.object().shape({\n    autocomplete: args.multiple ? yup.array().of(yup.string()).min(2).required() : yup.string()\n  });\n  const {\n    handleSubmit,\n    control\n  } = useForm({\n    resolver: yupResolver(schema)\n  });\n  const handleFormSubmit = (data: any) => {\n    console.log({\n      data\n    });\n  };\n  return <form onSubmit={handleSubmit(handleFormSubmit)}>\n            <AutocompleteController {...args} name="autocomplete" control={control} />\n            <button type="submit">Submit</button>\n        </form>;\n}',...AutocompleteMultiple.parameters?.docs?.source}}};const __namedExportsOrder=["Autocomplete","AutocompleteMultiple"]},"./src/components/InputController/AutocompleteController/AutocompleteController.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{d:()=>AutocompleteController});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_hook_form__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs"),_mui_material_Autocomplete__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@mui/material/Autocomplete/Autocomplete.js"),_mui_material__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/material/LinearProgress/LinearProgress.js"),_mui_material__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/material/FormControl/FormControl.js"),_mui_material__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mui/material/TextField/TextField.js"),lodash_get__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lodash.get/index.js"),lodash_get__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_1__),_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const LinearProgress=(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.ZP)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Z)((()=>"\n    position: absolute;\n    left: 1%;\n    right: 1%;\n    top: 90%;\n")),AutocompleteController=_ref=>{let{control,name,defaultValue,options,textFieldProps,multiple,optionValue="value",optionLabel="label",loading=!1,onChange,customOptionLabel,...rest}=_ref;return loading?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Z,{fullWidth:textFieldProps?.fullWidth,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(LinearProgress,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Z,{variant:textFieldProps?.variant,label:textFieldProps?.label,disabled:!0})]}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_hook_form__WEBPACK_IMPORTED_MODULE_7__.Qr,{control,name,defaultValue:multiple?defaultValue||[]:defaultValue||null,render:_ref2=>{let{field:{onChange:fieldOnChange,ref,...restField},fieldState}=_ref2;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material_Autocomplete__WEBPACK_IMPORTED_MODULE_8__.Z,{options:options||[],autoHighlight:!0,getOptionLabel:option=>{const found=options?.find((o=>lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(o,optionValue,"")===option||lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(o,optionValue,"")===lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(option,optionLabel,""))),label=lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(option,optionLabel,"")||found&&lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(found,optionLabel,"")||option||"";return customOptionLabel?customOptionLabel(found||option||""):label?.toString()},renderOption:(props,option)=>(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li",{...props,key:props.id},customOptionLabel?customOptionLabel(option):lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(option,optionLabel,"")),disableCloseOnSelect:multiple,isOptionEqualToValue:(option,value)=>"string"==typeof value?lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(option,optionValue,"")===value:lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(option,optionValue,"")===lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(value,optionValue,""),disableClearable:rest.disableClearable,disabled:rest.disabled,...rest.noOptionsText&&{noOptionsText:rest.noOptionsText},multiple,size:rest.size,className:"MuiFormControl-marginDense",onChange:(_,newValue)=>{onChange?.(newValue),fieldOnChange(multiple?newValue?.map((v=>lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(v,optionValue,null)||v)):lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(newValue,optionValue,null))},...rest,renderInput:params=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Z,{...params,inputRef:ref,label:textFieldProps?.label,variant:textFieldProps?.variant,fullWidth:textFieldProps?.fullWidth,error:fieldState?.invalid,helperText:fieldState?.error?.message||textFieldProps?.helperText,inputProps:{...params.inputProps,autoComplete:"off"}}),...restField})}})};try{AutocompleteController.displayName="AutocompleteController",AutocompleteController.__docgenInfo={description:"",displayName:"AutocompleteController",props:{control:{defaultValue:null,description:"",name:"control",required:!0,type:{name:"Control<any, any>"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<unknown>"}},textFieldProps:{defaultValue:null,description:"",name:"textFieldProps",required:!0,type:{name:"FilledTextFieldProps | OutlinedTextFieldProps | StandardTextFieldProps"}},optionValue:{defaultValue:{value:"value"},description:"",name:"optionValue",required:!1,type:{name:"string"}},optionLabel:{defaultValue:{value:"label"},description:"",name:"optionLabel",required:!1,type:{name:"string"}},customOptionLabel:{defaultValue:null,description:"",name:"customOptionLabel",required:!1,type:{name:"((option: any) => any)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/InputController/AutocompleteController/AutocompleteController.tsx#AutocompleteController"]={docgenInfo:AutocompleteController.__docgenInfo,name:"AutocompleteController",path:"src/components/InputController/AutocompleteController/AutocompleteController.tsx#AutocompleteController"})}catch(__react_docgen_typescript_loader_error){}}}]);