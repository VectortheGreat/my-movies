import { Picker } from "@react-native-picker/picker"
import { useState } from "react"
import { NativeModules, SafeAreaView, StyleSheet, View } from "react-native"
import { Text } from "react-native-paper"
import { regions } from "../../utils/regions"
export default function SettingsScreen() {
  const [selectedLanguage, setSelectedLanguage] = useState("en")
  const [selectedRegion, setSelectedRegion] = useState("us")
  const locale = NativeModules.I18nManager.localeIdentifier || "en_US"
  console.log(locale)
  return (
    <SafeAreaView style={styles.container}>
      <Row>
        <>
          <Text>Language</Text>
          <Picker
            mode="dropdown"
            style={{ width: 150 }}
            selectedValue={selectedLanguage}
            onValueChange={(itemValue) => setSelectedLanguage(itemValue)}
          >
            <Picker.Item label="English" value="en" />
            <Picker.Item label="Türkçe" value="tr" />
          </Picker>
        </>
      </Row>
      <Row>
        <>
          <Text>Region</Text>
          <Picker
            style={{ width: 150 }}
            selectedValue={selectedRegion}
            onValueChange={(itemValue) => setSelectedRegion(itemValue)}
          >
            {regions.map((region) => (
              <Picker.Item
                key={region.iso_639_1}
                label={`${region.english_name}${region.name && " / " + region.name}`}
                value={region.iso_639_1}
              />
            ))}
          </Picker>
        </>
      </Row>
    </SafeAreaView>
  )
}

function Row({ children }: { children: React.ReactNode }) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    gap: 10
  }
})
