### Roster Details<br />
Team Name: TEAM NEXT LEVEL<br />
Roster: cairne, Dawy, Flierax, nifee, onic<br />
Global Rank: [178](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [117]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  656.0<br />
<br />
Final Rank Value (656.0) = Starting Rank Value (666.2) + Head To Head Adjustments (-10.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.278[<sup>1</sup>](#table2)
- Bounty Collected: 0.232[<sup>2</sup>](#table1)
- Opponent Network: 0.050[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.140<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 666.2
- 400 + ( ( 0.140 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 666.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           11 |       94 | 2025-02-23 | Inner Circle Esports | L   | 1.000      | -            | -                | -                | -         |   -22.07 | cairne, Dawy, Flierax, nifee, onic     |
|           10 |      367 | 2025-02-10 | Nemiga Gaming        | L   | 1.000      | -            | -                | -                | -         |    -4.12 | cairne, Dawy, Flierax, nifee, onic     |
|            9 |      376 | 2025-02-10 | Team Falcons         | L   | 1.000      | -            | -                | -                | -         |    -0.06 | cairne, Dawy, Flierax, nifee, onic     |
|            8 |      433 | 2025-02-08 | Ex-Daystar           | W   | 1.000      | 0.467        | 0.000 (0.000)    | 0.060 (0.028)    | 0 (0.000) |     5.59 | cairne, Dawy, Flierax, nifee, s-chilla |
|            7 |      438 | 2025-02-08 | OG                   | L   | 1.000      | -            | -                | -                | -         |    -5.01 | cairne, Dawy, Flierax, nifee, s-chilla |
|            6 |      450 | 2025-02-08 | CYBERSHOKE Esports   | W   | 1.000      | 0.467        | 0.010 (0.005)    | 1.000 (0.467)    | 0 (0.000) |    24.76 | cairne, Dawy, Flierax, nifee, s-chilla |
|            5 |      948 | 2024-12-09 | TEAM NEXT LEVEL      | L   | 0.653      | -            | -                | -                | -         |    -8.39 | ch1rs, Dawy, Flierax, nifee, Psycho    |
|            4 |     3076 | 2024-09-07 | Leo Team             | L   | 0.033      | -            | -                | -                | -         |    -0.37 | cairne, Dawy, Flierax, nifee, Psycho   |
|            3 |     3133 | 2024-09-05 | FLuffy Gangsters     | L   | 0.020      | -            | -                | -                | -         |    -0.27 | cairne, Dawy, Flierax, nifee, Psycho   |
|            2 |     3149 | 2024-09-05 | Wild Lotus           | L   | 0.018      | -            | -                | -                | -         |    -0.21 | cairne, Dawy, Flierax, nifee, Psycho   |
|            1 |     3215 | 2024-09-03 | Zero Tenacity        | L   | 0.005      | -            | -                | -                | -         |    -0.04 | cairne, Dawy, Flierax, nifee, Psycho   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($845.86)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-17 |      0.706 | $1,197.67      | $845.86         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
