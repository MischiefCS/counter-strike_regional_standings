### Roster Details<br />
Team Name: Insilio<br />
Roster: dwushka, faydett, kelieN, mag1k3Y, sugaR<br />
Global Rank: [110](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_06_02.md)<br />
Regional Rank: [73]( ../../standings_europe_2025_06_02.md)<br />
<br />
Final Rank Value:  511.6<br />
<br />
Final Rank Value (511.6) = Starting Rank Value (509.8) + Head To Head Adjustments (1.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.186[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.047<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 509.8
- 400 + ( ( 0.047 - 0.000 ) / ( 0.691 - 0.000 ) ) * 1600 = 509.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |       88 | 2025-02-23 | ARCRED             | L   | 0.537      | -            | -                | -                | -         |    -8.48 | dwushka, faydett, kelieN, mag1k3Y, sugaR      |
|           13 |      700 | 2025-01-10 | Wildcard           | L   | 0.245      | -            | -                | -                | -         |    -0.22 | dwushka, faydett, kelieN, mo0N, sugaR         |
|           12 |      712 | 2025-01-09 | Rhyno Esports      | W   | 0.237      | 0.417        | 0.000 (0.000)    | 0.105 (0.010)    | 0 (0.000) |     2.63 | faydett, kelieN, mo0N, Pumpkin66, sugaR       |
|           11 |      718 | 2025-01-07 | Los kogutos        | W   | 0.225      | 0.417        | 0.000 (0.000)    | 0.038 (0.004)    | 0 (0.000) |     2.46 | faydett, kelieN, mo0N, Pumpkin66, sugaR       |
|           10 |      728 | 2025-01-04 | Dark Cloud Esports | W   | 0.204      | 0.417        | 0.001 (0.000)    | 0.158 (0.013)    | 0 (0.000) |     4.42 | faydett, kelieN, mo0N, Pumpkin66, sugaR       |
|            9 |      735 | 2024-12-29 | Heimo Esports      | W   | 0.165      | 0.417        | 0.005 (0.000)    | 0.035 (0.002)    | 0 (0.000) |     3.76 | faydett, kelieN, mo0N, Pumpkin66, sugaR       |
|            8 |      750 | 2024-12-27 | ECSTATIC           | L   | 0.151      | -            | -                | -                | -         |    -0.96 | faydett, kelieN, mo0N, Pumpkin66, sugaR       |
|            7 |      799 | 2024-12-19 | UNiTY esports      | L   | 0.098      | -            | -                | -                | -         |    -2.01 | faydett, iDISBALANCE, kelieN, sugaR, yiksrezo |
|            6 |      813 | 2024-12-18 | Nexus Gaming       | L   | 0.091      | -            | -                | -                | -         |    -0.65 | faydett, iDISBALANCE, kelieN, sugaR, yiksrezo |
|            5 |      814 | 2024-12-18 | UNiTY esports      | W   | 0.091      | 0.354        | 0.000 (0.000)    | 0.092 (0.003)    | 0 (0.000) |     1.01 | faydett, iDISBALANCE, kelieN, sugaR, yiksrezo |
|            4 |      931 | 2024-12-11 | Metizport          | L   | 0.043      | -            | -                | -                | -         |    -0.32 | faydett, FpSSS, kelieN, Pipw, sugaR           |
|            3 |      942 | 2024-12-10 | 9INE               | L   | 0.037      | -            | -                | -                | -         |    -0.21 | faydett, FpSSS, kelieN, Pipw, sugaR           |
|            2 |      965 | 2024-12-08 | Endpoint           | W   | 0.023      | 0.435        | 0.000 (0.000)    | 0.014 (0.000)    | 0 (0.000) |     0.36 | faydett, FpSSS, kelieN, Pipw, sugaR           |
|            1 |     1033 | 2024-12-05 | Team Sampi         | W   | 0.005      | 0.435        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.06 | faydett, FpSSS, kelieN, Pipw, sugaR           |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($87,854.17)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
