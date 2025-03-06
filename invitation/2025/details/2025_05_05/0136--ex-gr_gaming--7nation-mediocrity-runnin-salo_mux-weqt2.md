### Roster Details<br />
Team Name: Ex-GR Gaming<br />
Roster: 7nation, mediocrity, Runnin, SALO_MUX, weqt2<br />
Global Rank: [136](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_05_05.md)<br />
Regional Rank: [93]( ../../standings_europe_2025_05_05.md)<br />
<br />
Final Rank Value:  601.8<br />
<br />
Final Rank Value (601.8) = Starting Rank Value (610.2) + Head To Head Adjustments (-8.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.236[<sup>1</sup>](#table2)
- Bounty Collected: 0.150[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.097<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 610.2
- 400 + ( ( 0.097 - 0.000 ) / ( 0.734 - 0.000 ) ) * 1600 = 610.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     1045 | 2024-12-05 | Chinggis Warriors | L   | 0.189      | -            | -                | -                | -         |    -2.26 | 7nation, mediocrity, Runnin, SALO_MUX, weqt2     |
|            5 |     1057 | 2024-12-04 | DogEvil           | L   | 0.188      | -            | -                | -                | -         |    -3.90 | 7nation, mediocrity, Runnin, SALO_MUX, weqt2     |
|            4 |     1345 | 2024-11-21 | The Huns Esports  | L   | 0.096      | -            | -                | -                | -         |    -0.73 | mediocrity, Runnin, SALO_MUX, Sange, weqt2       |
|            3 |     1352 | 2024-11-20 | Harizma           | L   | 0.095      | -            | -                | -                | -         |    -1.90 | dukefissura, mediocrity, Runnin, SALO_MUX, weqt2 |
|            2 |     1625 | 2024-11-08 | IHC Esports       | W   | 0.009      | 0.333        | 0.000 (0.000)    | 0.001 (0.000)    | 0 (0.000) |     0.14 | 7nation, mediocrity, Runnin, SALO_MUX, weqt2     |
|            1 |     1627 | 2024-11-07 | Chinggis Warriors | W   | 0.009      | 0.333        | 0.007 (0.000)    | 0.499 (0.001)    | 0 (0.000) |     0.17 | 7nation, mediocrity, Runnin, SALO_MUX, weqt2     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($71.18)
- Divide that value by the 5th highest value among all rosters ($122,091.46)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-08 |      0.009 | $7,500.00      | $71.18          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
