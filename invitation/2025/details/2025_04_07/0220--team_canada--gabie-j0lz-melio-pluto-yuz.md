### Roster Details<br />
Team Name: Team Canada<br />
Roster: Gabie, J0LZ, Melio, Pluto, YuZ<br />
Global Rank: [220](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_04_07.md)<br />
Regional Rank: [69]( ../../standings_americas_2025_04_07.md)<br />
<br />
Final Rank Value:  417.5<br />
<br />
Final Rank Value (417.5) = Starting Rank Value (418.2) + Head To Head Adjustments (-0.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.035[<sup>2</sup>](#table1)

The average of these factors is 0.009<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 418.2
- 400 + ( ( 0.009 - 0.000 ) / ( 0.774 - 0.000 ) ) * 1600 = 418.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     1455 | 2024-11-15 | Metizport                   | L   | 0.243      | -            | -                | -                | -         |    -0.37 | Gabie, J0LZ, Melio, Pluto, YuZ |
|            4 |     1462 | 2024-11-15 | Mindfreak (Australian team) | L   | 0.243      | -            | -                | -                | -         |    -1.97 | Gabie, J0LZ, Melio, Pluto, YuZ |
|            3 |     1475 | 2024-11-14 | Team Norway                 | L   | 0.239      | -            | -                | -                | -         |    -2.52 | Gabie, J0LZ, Melio, Pluto, YuZ |
|            2 |     1515 | 2024-11-13 | Los kogutos                 | L   | 0.231      | -            | -                | -                | -         |    -0.80 | Gabie, J0LZ, Melio, Pluto, YuZ |
|            1 |     1518 | 2024-11-13 | Team Turkey                 | W   | 0.230      | 0.617        | 0.000 (0.000)    | 0.038 (0.005)    | 1 (0.230) |     5.04 | Gabie, J0LZ, Melio, Pluto, YuZ |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($225,665.16)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
