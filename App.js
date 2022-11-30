import { View, SafeAreaView, Button } from 'react-native'
import React, { useState, useEffect } from 'react'
import { EngineView, useEngine } from '@babylonjs/react-native'
//import { SceneLoader } from '@babylonjs/core/Loading/sceneLoader'
//import { Camera } from '@babylonjs/core/Cameras/camera'
//import { ArcRotateCamera } from '@babylonjs/core/Cameras/arcRotateCamera'
import { MeshBuilder } from '@babylonjs/core/Meshes/meshBuilder'
import { NativeModules } from 'react-native'
import { Scene } from '@babylonjs/core/scene'

console.log('nativemodules', NativeModules)

const containerStyle = {
	width: '100%',
	height: '100%',
}

export default function App() {
	const engine = useEngine()
	const [camera, setCamera] = useState()
	const [scene, setScene] = useState()
	console.log('engine?', engine)

	useEffect(() => {
		if (engine) {
			console.log('setting up scene', engine)
			const scene = new Scene(engine)
			scene.createDefaultCameraOrLight(true, undefined, true)
			const sphere = MeshBuilder.CreateSphere(
				'sphere',
				{ diameter: 2, segments: 32 },
				scene
			)
			sphere.position.y = 1
			setScene(scene)
			setCamera(scene.activeCamera)
			console.log('scene done', scene)
		}
	}, [engine])

	//MSAA=4
	return (
		<SafeAreaView>
			<View style={containerStyle}>
				<Button title="test" />
				{/*<EngineView camera={camera} displayFrameRate={true} />*/}
			</View>
		</SafeAreaView>
	)
}
